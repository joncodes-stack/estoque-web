import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'estoque-web';

  constructor(private primeNGConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }


}