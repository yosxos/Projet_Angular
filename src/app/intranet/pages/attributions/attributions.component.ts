import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-attributions',
  templateUrl: './attributions.component.html',
  styleUrls: ['./attributions.component.css']
})
export class AttributionsComponent implements OnInit {
  filtreModele: string = '';
  constructor(public compagnies: CompagnieService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  editButtonClick(code: string) {
    this._router.navigate(['/intranet/editvol', code])

  }
  addButtonClick() {
    this._router.navigate(['/intranet/addvol']);

  }
}
