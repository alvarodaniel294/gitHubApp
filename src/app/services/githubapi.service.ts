import { Injectable } from '@angular/core';
import {HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  public previous=0;
  public current;
  public next=0;
  public primero=0;
  public segundo=0;
  public tercero=0;

  perPage=8;

  private apiURL: string  =  'https://api.github.com';
  constructor(private http:HttpClient) { 
  }

  getUsers(){
    return this.http.get(`${this.apiURL}/users`);
  }

  getReposUser(userName:string){
    this.previous=0;
    this.current=1;
    this.next=2;
    this.primero=1;
    this.segundo=2;
    this.tercero=3;
    return this.http.get(`${this.apiURL}/users/${userName}/repos?page=1&per_page=${this.perPage}`);
  }
  getReposUserNext(userName:string,page:number){
      this.previous=page;
      this.current=page+1;
      this.next=this.current+1;
      this.primero++;
      this.segundo++;
      this.tercero++;
      return this.http.get(`${this.apiURL}/users/${userName}/repos?page=${this.current}&per_page=${this.perPage}`);
  }
  getReposUserPrev(userName:string,page:number){
    if(page<=1){
      return;
    }else{
      this.previous--;
      this.current--;
      this.primero--;
      this.segundo--;
      this.tercero--;
      return this.http.get(`${this.apiURL}/users/${userName}/repos?page=${this.current}&per_page=${this.perPage}`);
    }
  }
  getReposUserSecond(userName:string,page:number){
    this.getReposUserNext(userName,page);
  }
  getReposUserThird(userName:string,page:number){
    this.previous+=2;
    this.current+=2;
    this.primero+=2;
    this.segundo+=2;
    this.tercero+=2;
    return this.http.get(`${this.apiURL}/users/${userName}/repos?page=${this.current}&per_page=${this.perPage}`);
  }



}
