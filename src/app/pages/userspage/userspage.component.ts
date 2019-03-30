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
  constructor(private githubService:GithubapiService,
              private router:Router) { 
    this.loading=true;
    this.githubService.getUsers().subscribe(gitUsers=>{
      this.users=gitUsers;
      this.loading=false;
    });
  }

  ngOnInit() {
    
  }
  userPageExt(html:string){
    window.open(html);
  }
  repoPage(userName:string){
    this.router.navigate(['repos',userName])
  }

}
