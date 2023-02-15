import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  message="Hello world";
  imgPath="../assets/logo.jpg";
  url="https://www.bridgelabz.com/";
  name: string="";

  ngOnInit():void{
    this.message="Hello from bridgelabz";
  }

  onClickEvent(event: any){
    console.log("Button clicked ",event);
    window.open(this.url,"_blank");
  }
}
