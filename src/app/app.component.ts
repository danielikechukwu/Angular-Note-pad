import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface IHusband {
  name: string,
  age: number,
  wife: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  husbands: IHusband[] = [
    {name: 'Philip', age: 28, wife: 'Magin'},
    {name: 'John', age: 38, wife: 'Joy'},
    {name: 'Kennedy', age: 32, wife: 'Betrice'},
    {name: 'Andrew', age: 29, wife: 'Success'},
  ]
  title = 'NotePad';
}
