import {Component, effect, Injector, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FieldComponent} from './field/field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TicTacToe';

  public nextPlayer: WritableSignal<string | null> = signal('X');
  public map: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];

  nextPlayerChangeEvent(nextPlayer: WritableSignal<string | null>){
    const win = this.checkWin(this.map);
    console.log("ogr")
    if (win || (win === null && this.map.flat().every(v => v !== ''))) {
      alert(`Player ${win} wins!`);
      this.map = [['', '', ''], ['', '', ''], ['', '', '']];
      this.nextPlayer.set(null);
      this.nextPlayer.set('X');
    }
  }


  checkWin(map: string[][]): string | null {
    for (let i = 0; i < 3; i++) {
      if (map[i][0] && map[i][0] === map[i][1] && map[i][1] === map[i][2]) {
        return map[i][0];
      }
    }
    for (let i = 0; i < 3; i++) {
      if (map[0][i] && map[0][i] === map[1][i] && map[1][i] === map[2][i]) {
        return map[0][i];
      }
    }
    if (map[0][0] && map[0][0] === map[1][1] && map[1][1] === map[2][2]) {
      return map[0][0];
    }
    if (map[0][2] && map[0][2] === map[1][1] && map[1][1] === map[2][0]) {
      return map[0][2];
    }
    return null;
  }
}
