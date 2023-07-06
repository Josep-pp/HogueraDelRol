import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit{


  bolSmall?: boolean;
  cantidadDados: number[] = [];
  bonosDadosPequenos: number[] = [];
  bonosDadosMedios: number[] = [];
  bonosDadosGrandes: number[] = [];
  eleccionD: number[] = [];
  eleccionDincognita: number = 0;
  rellenoTotal: string[] = [];
  total: number = 0;




  //Variables d2
  cantiD2: number = 0;
  bonoD2: number = 0;
  totalD2: number = 0;
  arrayD2: number[] = [];
  rellenoD2: string[]=[];
  //Variables d6
  cantiD6: number = 0;
  bonoD6: number = 0;
  totalD6: number = 0;
  arrayD6: number[] = [];
  rellenoD6: string[]=[];
  //Variables d8
  cantiD8: number = 0;
  bonoD8: number = 0;
  totalD8: number = 0;
  arrayD8: number[] = [];
  rellenoD8: string[]=[];
  //Variables d10
  cantiD10: number = 0;
  bonoD10: number = 0;
  totalD10: number = 0;
  arrayD10: number[] = [];
  rellenoD10: string[]=[];
  //Variables d12
  cantiD12: number = 0;
  bonoD12: number = 0;
  totalD12: number = 0;
  arrayD12: number[] = [];
  rellenoD12: string[]=[];
  //Variables d20
  cantiD20: number = 0;
  bonoD20: number = 0;
  totalD20: number = 0;
  arrayD20: number[] = [];
  rellenoD20: string[]=[];
  //Variables d100
  cantiD100: number = 0;
  bonoD100: number = 0;
  totalD100: number = 0;
  arrayD100: number[] = [];
  rellenoD100: string[]=[];
  //Variables d?
  cantiDincognita: number = 0;
  bonoDincognita: number = 0;
  totalDincognita: number = 0;
  arrayDincognita: number[] = [];
  rellenoDincognita: string[]=[];


  // @ts-ignore
  formulario = this.fb.group({
    cantiD2:[],
    bonoD2:[],
    cantiD6:[],
    bonoD6:[],
    cantiD8:[],
    bonoD8:[],
    cantiD10:[],
    bonoD10:[],
    cantiD12:[],
    bonoD12:[],
    cantiD20:[],
    bonoD20:[],
    cantiD100:[],
    bonoD100:[],
    cantiDincognita:[],
    bonoDincognita:[],
    elecionDincognita:[]

  })

  ngOnInit() {

    //Cargar arrays de elección de dados y bonos
    for (let i = 0; i < 11; i++) {
      this.cantidadDados.push(i);
    }

    for (let i = -10; i < 11; i ++) {
      this.bonosDadosPequenos.push(i);
    }

    for (let i = -20; i < 21; i ++) {
      this.bonosDadosMedios.push(i);
    }

    for (let i = -100; i < 101; i ++) {
      this.bonosDadosGrandes.push(i);
    }
//Arrays para el relleno con blancos de la tabla para mantener coherencia visual
    for (let i = 0; i < 12; i++) {
      this.rellenoD2.push("");
    }

    for (let i = 0; i < 12; i++) {
      this.rellenoD6.push("");
    }

    for (let i = 0; i < 12; i++) {
      this.rellenoD8.push("");
    }

    for (let i = 0; i < 12; i++) {
      this.rellenoD10.push("");
    }

    for (let i = 0; i < 12; i++) {
      this.rellenoD12.push("");
    }

    for (let i = 0; i < 12; i++) {
      this.rellenoD20.push("");
    }

    for (let i = 0; i < 12; i++) {
      this.rellenoD100.push("");
    }

    for (let i = 0; i < 12; i++) {
      this.rellenoDincognita.push("");
    }

    for (let i = 0; i < 12; i++) {
      this.rellenoTotal.push("");
    }

   //Array de elección de dado para el dado elegible

    for (let i = 0; i < 101; i++) {
      this.eleccionD.push(i);
    }

    //Para establecer el boleano de tamaño de pantalla
    this.onResize();
  }

  constructor(private fb: FormBuilder, private viewportScroller: ViewportScroller) {
  }

  @HostListener('window:resize',['$event'])
  onResize () {
    this.bolSmall = window.innerWidth < 992;
  }

  formDados() {

    if(this.formulario.valid){
      this.total = 0;
      // Logica para el d2
      this.arrayD2.splice(0);
      this.rellenoD2.splice(0);
      this.totalD2 = 0;
      this.cantiD2 = 0;
      this.bonoD2 = 0;

      this.cantiD2 = this.formulario.value.cantiD2!;
      this.bonoD2 = this.formulario.value.bonoD2!;

      if (this.cantiD2 != 0){
        for (let i = 0; i < this.cantiD2; i++) {
          this.arrayD2.push(Math.floor(Math.random() * 2) + 1);
          this.totalD2 = this.totalD2 + this.arrayD2.at(i)!;
        }
      }
      if (this.arrayD2.length < 10){
        for (let i = this.arrayD2.length; i < 10; i++) {
          this.rellenoD2.push('');
        }
      }

      this.totalD2= this.totalD2+this.bonoD2;
      this.total = this.total + this.totalD2;

      // Logica para el d6
      this.arrayD6.splice(0);
      this.rellenoD6.splice(0);
      this.totalD6 = 0;
      this.cantiD6 = 0;
      this.bonoD6 = 0;

      this.cantiD6 = this.formulario.value.cantiD6!;
      this.bonoD6 = this.formulario.value.bonoD6!;

      if (this.cantiD6 != 0){
        for (let i = 0; i < this.cantiD6; i++) {
          this.arrayD6.push(Math.floor(Math.random() * 6) + 1);
          this.totalD6 = this.totalD6 + this.arrayD6.at(i)!;
        }
      }
      if (this.arrayD6.length < 10){
        for (let i = this.arrayD6.length; i < 10; i++) {
          this.rellenoD6.push('');
        }
      }

      this.totalD6= this.totalD6+this.bonoD6;

      this.total = this.total + this.totalD6;

      // Logica para el d8
      this.arrayD8.splice(0);
      this.rellenoD8.splice(0);
      this.totalD8 = 0;
      this.cantiD8 = 0;
      this.bonoD8 = 0;

      this.cantiD8 = this.formulario.value.cantiD8!;
      this.bonoD8 = this.formulario.value.bonoD8!;

      if (this.cantiD8 != 0){
        for (let i = 0; i < this.cantiD8; i++) {
          this.arrayD8.push(Math.floor(Math.random() * 8) + 1);
          this.totalD8 = this.totalD8 + this.arrayD8.at(i)!;
        }
      }
      if (this.arrayD8.length < 10){
        for (let i = this.arrayD8.length; i < 10; i++) {
          this.rellenoD8.push('');
        }
      }

      this.totalD8= this.totalD8+this.bonoD8;

      this.total = this.total + this.totalD8;

      // Logica para el d10
      this.arrayD10.splice(0);
      this.rellenoD10.splice(0);
      this.totalD10 = 0;
      this.cantiD10 = 0;
      this.bonoD10 = 0;

      this.cantiD10 = this.formulario.value.cantiD10!;
      this.bonoD10 = this.formulario.value.bonoD10!;

      if (this.cantiD10 != 0){
        for (let i = 0; i < this.cantiD10; i++) {
          this.arrayD10.push(Math.floor(Math.random() * 10) + 1);
          this.totalD10 = this.totalD10 + this.arrayD10.at(i)!;
        }
      }
      if (this.arrayD10.length < 10){
        for (let i = this.arrayD10.length; i < 10; i++) {
          this.rellenoD10.push('');
        }
      }

      this.totalD10= this.totalD10+this.bonoD10;

      this.total = this.total + this.totalD10;

      // Logica para el d12
      this.arrayD12.splice(0);
      this.rellenoD12.splice(0);
      this.totalD12 = 0;
      this.cantiD12 = 0;
      this.bonoD12 = 0;

      this.cantiD12 = this.formulario.value.cantiD12!;
      this.bonoD12 = this.formulario.value.bonoD12!;

      if (this.cantiD12 != 0){
        for (let i = 0; i < this.cantiD12; i++) {
          this.arrayD12.push(Math.floor(Math.random() * 12) + 1);
          this.totalD12 = this.totalD12 + this.arrayD12.at(i)!;
        }
      }
      if (this.arrayD12.length < 10){
        for (let i = this.arrayD12.length; i < 10; i++) {
          this.rellenoD12.push('');
        }
      }

      this.totalD12= this.totalD12+this.bonoD12;

      this.total = this.total + this.totalD12;

      // Logica para el d20
      this.arrayD20.splice(0);
      this.rellenoD20.splice(0);
      this.totalD20 = 0;
      this.cantiD20 = 0;
      this.bonoD20 = 0;

      this.cantiD20 = this.formulario.value.cantiD20!;
      this.bonoD20 = this.formulario.value.bonoD20!;

      if (this.cantiD20 != 0){
        for (let i = 0; i < this.cantiD20; i++) {
          this.arrayD20.push(Math.floor(Math.random() * 20) + 1);
          this.totalD20 = this.totalD20 + this.arrayD20.at(i)!;
        }
      }
      if (this.arrayD20.length < 10){
        for (let i = this.arrayD20.length; i < 10; i++) {
          this.rellenoD20.push('');
        }
      }

      this.totalD20= this.totalD20+this.bonoD20;

      this.total = this.total + this.totalD20;

      // Logica para el d100
      this.arrayD100.splice(0);
      this.rellenoD100.splice(0);
      this.totalD100 = 0;
      this.cantiD100 = 0;
      this.bonoD100 = 0;

      this.cantiD100 = this.formulario.value.cantiD100!;
      this.bonoD100 = this.formulario.value.bonoD100!;

      if (this.cantiD100 != 0){
        for (let i = 0; i < this.cantiD100; i++) {
          this.arrayD100.push(Math.floor(Math.random() * 100) + 1);
          this.totalD100 = this.totalD100 + this.arrayD100.at(i)!;
        }
      }
      if (this.arrayD100.length < 10){
        for (let i = this.arrayD100.length; i < 10; i++) {
          this.rellenoD100.push('');
        }
      }

      this.totalD100= this.totalD100+this.bonoD100;

      this.total = this.total + this.totalD100;

      // Logica para el d?
      this.arrayDincognita.splice(0);
      this.rellenoDincognita.splice(0);
      this.totalDincognita = 0;
      this.cantiDincognita = 0;
      this.bonoDincognita = 0;

      this.cantiDincognita = this.formulario.value.cantiDincognita!;
      this.bonoDincognita = this.formulario.value.bonoDincognita!;

      if (this.cantiDincognita != 0){

        if(this.formulario.value.elecionDincognita){
          this.eleccionDincognita = this.formulario.value.elecionDincognita!;

          for (let i = 0; i < this.cantiDincognita; i++) {
            this.arrayDincognita.push(Math.floor(Math.random() * (this.eleccionDincognita)) + 1);
            this.totalDincognita = this.totalDincognita + this.arrayDincognita.at(i)!;
          }

        }else {

          for (let i = 0; i < this.cantiDincognita; i++) {
            this.arrayDincognita.push(0);
            this.totalDincognita = this.totalDincognita + this.arrayDincognita.at(i)!;
          }
        }



      }
      if (this.arrayDincognita.length < 10){
        for (let i = this.arrayDincognita.length; i < 10; i++) {
          this.rellenoDincognita.push('');
        }
      }

      this.totalDincognita= this.totalDincognita+this.bonoDincognita;

      this.total = this.total + this.totalDincognita;
    }




  }

  scroll(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
