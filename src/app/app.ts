// import { Seccomponent } from './seccomponent/seccomponent';
import { Component } from '@angular/core';
import { 
  // RouterLink, 
  RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Angulardirective } from './angulardirective/angulardirective';

@Component({
  selector: 'app-root',
  imports: [
    //  Seccomponent
    // RouterLink,
    // RouterOutlet,
    // Header
    Angulardirective
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frist_angular';
}
