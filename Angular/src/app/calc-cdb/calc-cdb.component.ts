import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import CDBParams from '../shared/models/CDBParams';
import CDBResults from '../shared/models/CDBResults';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import CalcCDBService from '../shared/api/calc-cdb.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-calc-cdb',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './calc-cdb.component.html',
  styleUrl: './calc-cdb.component.css'
})
export class CalcCdbComponent {
  cdbParams: CDBParams = new CDBParams();
  cdbResults: CDBResults = new CDBResults();

  constructor(private CalcCCDBService: CalcCDBService) {
  }

  getCdbResults() {
    console.log("entered getCdbResults");
    console.log("initial value: " + this.cdbParams.initialValue);
    console.log("months: " + this.cdbParams.months);

    this.CalcCCDBService.calcCdb(this.cdbParams.initialValue, this.cdbParams.months)
        .subscribe(result => this.cdbResults = result);

  }
}
