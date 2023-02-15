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
  nameError:string="";

  ngOnInit():void{
    this.message="Hello from bridgelabz";
  }

  onClickEvent(event: any){
    console.log("Button clicked ",event);
    window.open(this.url,"_blank");
  }

  onInputEvent(event: any){
    console.log("Change event occured!!", event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(this.name)){
      this.nameError="";
      return;
    }
    this.nameError="Name is incorrect!!";
  }
}
