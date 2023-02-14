import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  message="Hello world";

  ngOnInit():void{
    this.message="Hello from bridgelabz";
  }
}
