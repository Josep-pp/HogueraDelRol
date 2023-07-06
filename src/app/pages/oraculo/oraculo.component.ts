import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DescriptoresService} from "../../services/descriptores.service";
import {Descriptor} from "../../models/DescriptoresResponse";
import {AccionObjetivo} from "../../models/AccionesObjetivosResponse";
import {AccionesObjetivosService} from "../../services/acciones-objetivos.service";

@Component({
  selector: 'app-oraculo',
  templateUrl: './oraculo.component.html',
  styleUrls: ['./oraculo.component.scss']
})
export class OraculoComponent implements OnInit{

  // Variables oráculo SiNo
  resultadoSiNo: number = 0;
  respuestaSiNo: string = '';
  balanceSiNo: number = 0;
  dadoSi: number = 0;
  dadoNo: number = 0;
  caos: number = 5;
  probable: string = 'Neutral'
  arrayProbable: string[] = ['Seguro','Muy probable', 'Probable', 'Neutral','Poco Probable','Improbable','Imposible'];
  arrayCaos: number[] = [3,4,5,6,7];

  //Variables oráculo de descripción
  arrayDescriptores: Descriptor[] = [];
  descriptor1: string = '';
  descriptor2: string = '';

  //Variables oráculo de acción/objetivo

  arrayAccionesDescripciones: AccionObjetivo[] = [];
  accion: string = '';
  objetivo: string = '';

  formSiNo = this.fb.group({
    probable:[],
    caos:[]
  })

  constructor(private fb: FormBuilder, private descriptoresService: DescriptoresService, private  accionesObjetivosService: AccionesObjetivosService) {
  }
  ngOnInit() {

    //Cargamos desde la api los descriptores
    this.descriptoresService.getDescriptores().subscribe({
      next: value => {
        this.arrayDescriptores = value.Descriptores;
        console.log(this.arrayDescriptores);

      },
      error: err => {
        console.log(err)
      }
    });
    this.accionesObjetivosService.getAccionesDescriptores().subscribe({
      next: value => {
        this.arrayAccionesDescripciones = value.AccionesObjetivos;
        console.log(this.arrayAccionesDescripciones);

      },
      error: err => {
        console.log(err)
      }
    })

  }



  oraculoSiNo() {


    if (this.formSiNo.valid){
      this.probable = 'Neutral';
      this.caos = 5;
      if (this.formSiNo.value.probable != null){
        this.probable = this.formSiNo.value.probable;
      }
      if (this.formSiNo.value.caos != null){
        this.caos = this.formSiNo.value.caos;
      }

      switch (this.probable){
        case 'Seguro':
          this.balanceSiNo = 6;
          break;
        case 'Muy probable':
          this.balanceSiNo = 4;
          break;
        case 'Probable':
          this.balanceSiNo = 2;
          break;
        case 'Poco Probable':
          this.balanceSiNo = -2;
          break;
        case 'Improbable':
          this.balanceSiNo = -4;
          break;
        case 'Imposible':
          this.balanceSiNo = -6;
          break;
        default:
          this.balanceSiNo = 0;
          break; }

      //Calculamos la respuesta de Si o No (o si hay que replantearse la pregunta)

      this.dadoNo = Math.floor(Math.random() * 10) + 1;
      this.dadoSi = Math.floor(Math.random() * 10) + 1;
      this.resultadoSiNo = this.dadoSi-this.dadoNo+this.balanceSiNo;

      if(this.resultadoSiNo < 0){
        this.respuestaSiNo = 'No';
      }else if(this.resultadoSiNo >0){
        this.respuestaSiNo = 'Sí';
      }else{
        this.respuestaSiNo = '¡La pregunta que planteas no tiene sentido!'
      }

      //Ahora calculamos si el factor de caos influye para extremar la repuesta(si tiene sentido) o si salta un evento aleatorio

      if(Math.floor(Math.random() * 10) + 1 < this.caos && this.resultadoSiNo !=0){

        if(this.dadoSi % 2   && this.dadoNo % 2){
          this.respuestaSiNo = 'Extremadamente ' + this.respuestaSiNo;
        }

        if(this.dadoSi <= this.caos  && this.dadoNo <= this.caos){
          this.respuestaSiNo = this.respuestaSiNo +' ¡Evento Aleatorio!';
        }
      }

    }



  }

  consultarDescripcion() {

    //Aquí no sumo nada en el random como en los dados ya que el arrey empieza con indice 0.
    //Con este método siempre podrá acceder a todos los descriptores aunque se añadan o quiten campos en la base de datos
    this.descriptor1 = this.arrayDescriptores.at(Math.floor(Math.random() * (this.arrayDescriptores.length)))!.descriptor1;
    this.descriptor2 = this.arrayDescriptores.at(Math.floor(Math.random() * (this.arrayDescriptores.length)))!.descriptor2;

  }

  consultarAccionObjetivo() {

    this.accion = this.arrayAccionesDescripciones.at(Math.floor(Math.random() * (this.arrayAccionesDescripciones.length)))!.accion;
    this.objetivo = this.arrayAccionesDescripciones.at(Math.floor(Math.random() * (this.arrayAccionesDescripciones.length)))!.objetivo;

  }
}
