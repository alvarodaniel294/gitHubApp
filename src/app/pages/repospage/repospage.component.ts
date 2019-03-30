import { Component, OnInit } from '@angular/core';
import { GithubapiService } from 'src/app/services/githubapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repospage',
  templateUrl: './repospage.component.html',
  styleUrls: ['./repospage.component.css']
})
export class RepospageComponent implements OnInit {

  userName:string;
  reposUser;
  loading:boolean;
  constructor(private githubApiService:GithubapiService,
              private activatedRoute:ActivatedRoute) {
                this.loading=true;
                this.activatedRoute.params.subscribe(params=>{
                  this.userName=params["userName"]
                });
   }

  ngOnInit() {
    this.githubApiService.getReposUser(this.userName).subscribe(reposUser=>{
      this.reposUser=reposUser;
      this.loading=false;
    })
  }
  goGithubRepo(url:string){
    window.open(url);
  }
}
