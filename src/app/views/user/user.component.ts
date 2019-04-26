import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Repo } from 'src/app/models/repo.model';
import { RepoService } from './repo.service';

import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  faMapMarkedAlt = faMapMarkedAlt;
  faBuilding = faBuilding;
  faUser = faUser;
  faStar = faStar;

  user: User = new User();
  repos: Repo[] = [];

  constructor(
    private userService: UserService, 
    private router: Router,
    private repoService: RepoService) { }

  ngOnInit() {
    if (
      this.userService.user == null || 
      this.userService.user == undefined || 
      this.userService.user.login == null || 
      this.userService.user.login == undefined) {
        this.router.navigateByUrl('/search');
        return;
    }
    this.user = this.userService.user;
    this.repoService.urlRepo = this.user.repos_url;

    this.getRepos();
  }

  getRepos() {
    this.repoService.getRepos().subscribe((res: Array<Repo>) => {
      this.repos = res;
      console.log(this.repos[0].name);
      
    });
  }

}
