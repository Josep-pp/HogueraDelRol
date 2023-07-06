import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DescriptoresResponse} from "../models/DescriptoresResponse";
import {AccionesObjetivoResponse} from "../models/AccionesObjetivosResponse";

@Injectable({
  providedIn: 'root'
})
export class AccionesObjetivosService {

  constructor(private http: HttpClient) { }

  public getAccionesDescriptores(): Observable<AccionesObjetivoResponse>{
    const url = 'http://127.0.0.1:8000/api/accionesobjetivos/'

    return this.http.get<AccionesObjetivoResponse>(url);
  }
}
