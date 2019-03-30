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
  constructor(private githubApiService:GithubapiService,
              private activatedRoute:ActivatedRoute) {
                this.activatedRoute.params.subscribe(params=>{
                  this.userName=params["userName"]
                });
   }

  ngOnInit() {
    this.githubApiService.getReposUser(this.userName).subscribe(reposUser=>{
      this.reposUser=reposUser;
    })
  }
  goGithubRepo(url:string){
    window.open(url);
  }
}
