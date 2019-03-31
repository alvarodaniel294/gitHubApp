import { Component, OnInit } from '@angular/core';
import { GithubapiService } from 'src/app/services/githubapi.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-repospage',
  templateUrl: './repospage.component.html',
  styleUrls: ['./repospage.component.css']
})
export class RepospageComponent implements OnInit {

  userName:string;
  reposUser;
  loading:boolean;
  currentPage;
  constructor(public githubApiService:GithubapiService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
                this.loading=true;
                this.activatedRoute.params.subscribe(params=>{
                  this.userName=params["userName"]
                  this.currentPage=Number( params["page"]);
                });
   }

  ngOnInit() {
    this.githubApiService.getReposUser(this.userName,this.currentPage).subscribe(reposUser=>{
      this.reposUser=reposUser;
      this.loading=false;
      
    })
  }
  goGithubRepo(url:string){
    window.open(url);
  }

  goPageNext(){
    
    this.router.navigate(["repos",this.userName,this.currentPage+1])
    this.githubApiService.getReposUserNext(this.userName,this.githubApiService.current).subscribe(reposUser=>{
      this.reposUser=reposUser
      
    })
  }
  goPagePrev(){
    this.router.navigate(["repos",this.userName,this.currentPage-1])
    this.githubApiService.getReposUserPrev(this.userName,this.githubApiService.current).subscribe(reposUser=>{
      this.reposUser=reposUser
      
    })
  }
  goPageFirst(){

  }
  goPageSecond(){
    this.goPageNext();
  }
  goPageThird(){

    this.router.navigate(["repos",this.userName,this.currentPage+2])
    this.githubApiService.getReposUserThird(this.userName,this.githubApiService.current).subscribe(reposUser=>{
      this.reposUser=reposUser
      
    })
  }
}
