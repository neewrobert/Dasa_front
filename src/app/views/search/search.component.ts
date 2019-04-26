import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //alerta de msg para usuario nao encontrado
  userNotFound = false;

  //alerta de msg ao incluir user
  includeUser = false;

  //nome do user
  name;

  //FontAwesome Icons
  faSearch = faSearch;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  //Cancela o alerta para user nao encontrado
  turnOffLight() {
    this.userNotFound = false;
    this.includeUser = false;
  }

  search() {
    if (this.name == undefined || this.name == null || this.name == '') {
      this.includeUser = true;
    } else {
      this.service.getUser(this.name).subscribe((res: User) => {
        this.service.user = res;
        this.router.navigateByUrl('/user');
      }, err => {
        this.userNotFound = true;
      });
    }
    
  }

}
