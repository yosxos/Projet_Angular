import { Component, OnInit, Input} from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public pages:PagesService) { }

  ngOnInit(): void {

  }


}
