import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {


  }

  navigate(){

    this._router.navigate(['/navigate'])
  }





}
