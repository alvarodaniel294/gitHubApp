import { Injectable } from '@angular/core';
import {HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  private apiURL: string  =  'https://api.github.com';
  constructor(private http:HttpClient) { 

  }

  getUsers(){
    return this.http.get(`${this.apiURL}/users`);
  }
}
