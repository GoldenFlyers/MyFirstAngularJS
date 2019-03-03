import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .text-success{
    color: green;
  }
  `]
})
export class HomeComponent implements OnInit {
  public Name = "Apurva"
  public siteURL = window.location.href;
  public myID = "TestID";
  public IsDisabled = false;
  public successClass = "text-success";
  constructor() { }

  ngOnInit() {
    
  }

  greetUser(){
    return "Hello " + this.Name;
  }

}
