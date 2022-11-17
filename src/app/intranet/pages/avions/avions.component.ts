import { Component, OnInit } from '@angular/core';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
  styleUrls: ['./avions.component.css']
})
export class AvionsComponent implements OnInit {

  constructor(public volServ:CompagnieService) { }

  ngOnInit(): void {
  }

}
