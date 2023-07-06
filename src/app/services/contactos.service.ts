import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) {}

  postContacto(data: any){

    const url = 'http://127.0.0.1:8000/api/contactos/'
    return this.http.post(url,data);

  }
}
