// import { Seccomponent } from './seccomponent/seccomponent';
import { Component } from '@angular/core';
import { 
  // RouterLink, 
  RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Angulardirective } from './angulardirective/angulardirective';
import { Reactiveforms } from './reactiveforms/reactiveforms';

@Component({
  selector: 'app-root',
  imports: [
    //  Seccomponent
    // RouterLink,
    // RouterOutlet,
    // Header
    // Angulardirective
    Reactiveforms
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frist_angular';
}
