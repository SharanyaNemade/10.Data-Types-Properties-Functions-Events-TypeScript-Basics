import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataType } from './data-type/data-type';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataType],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular21');
}
