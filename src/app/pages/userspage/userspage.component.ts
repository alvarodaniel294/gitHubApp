import { Component, OnInit } from '@angular/core';
import { GithubapiService } from 'src/app/services/githubapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.css']
})
export class UserspageComponent implements OnInit {

  users;
  loading:boolean;
  lastUserId:number;
  constructor(private githubService:GithubapiService,
              private router:Router) { 
    this.loading=true;
    this.githubService.getUsers().subscribe(gitUsers=>{
      this.users=gitUsers;
      this.loading=false;
      this.lastUserId=this.users[this.users.length-1].id;    
      
    });
  }

  ngOnInit() {
    
  }
  userPageExt(html:string){
    window.open(html);
  }
  repoPage(userName:string){
    this.router.navigate(['repos',userName,1])
  }
  goNext(){
    this.loading=true;
    this.githubService.getUsersNext(this.lastUserId).subscribe(gitUsers=>{
      this.users=gitUsers;
      this.loading=false;
      this.lastUserId=this.users[this.users.length-1].id;    
      
    })
  }
  goFirst(){
    this.loading=true;
    this.githubService.getUsersNext(this.lastUserId).subscribe(gitUsers=>{
      this.users=gitUsers;
      this.loading=false;
      this.lastUserId=0;   
      
    })
  }

}
