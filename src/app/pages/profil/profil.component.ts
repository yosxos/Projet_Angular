import { Component, OnInit, Input} from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public userServ:UserService,public pageServ:PagesService) { }

  ngOnInit(): void {

  }


}
