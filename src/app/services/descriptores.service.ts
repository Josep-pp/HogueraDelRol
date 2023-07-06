import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DescriptoresResponse} from "../models/DescriptoresResponse";

@Injectable({
  providedIn: 'root'
})
export class DescriptoresService {

  constructor(private http: HttpClient) { }

  public getDescriptores(): Observable<DescriptoresResponse>{
    const url = 'http://127.0.0.1:8000/api/descriptores/'

    return this.http.get<DescriptoresResponse>(url);
  }
}
