import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ContactosService} from "../../services/contactos.service";


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {


  mensajeRespuesta: string = '';


  formulario = this.fb.group({

    nombre:['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    asunto: ['', [Validators.required]],
    honeypot: ['']

  })

  constructor(private fb: FormBuilder, private http: HttpClient, private contactosService: ContactosService) {}


  form() {

    this.mensajeRespuesta = '';

    if(this.formulario.valid && this.formulario.value.honeypot == ''){


      let data = {
        nombre : this.formulario.value.nombre!,
        email :  this.formulario.value.email!,
        asunto : this.formulario.value.asunto!
      }


     this.contactosService.postContacto(data).subscribe(
       {
         next: value => {
           this.mensajeRespuesta = '¡Gracias por contactar con nosotros!';
         },
         error: err => {
           this.mensajeRespuesta = 'Vaya, parece que ha habido un error, prueba a refrescar la página'
           console.error(err);
         }
       }
     )

    }
  }
}
