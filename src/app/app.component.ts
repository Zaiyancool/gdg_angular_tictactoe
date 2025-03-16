import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TicTacToeComponent],
  template: `
    <app-tic-tac-toe></app-tic-tac-toe>
  `,
  styles: []
})
export class AppComponent {}