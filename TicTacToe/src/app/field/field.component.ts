import {Component, effect, model, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {
  nextPlayer = model.required<WritableSignal<string | null>>();
  protected currentVal: string | null = null;

  constructor() {
    effect(() => {
      if(this.nextPlayer()() === null){
        this.currentVal = null;
      }
    });
  }


  handleClick = () => {
    if (this.currentVal === null) {
      this.currentVal = this.nextPlayer()();
      this.nextPlayer().set(this.nextPlayer()() === 'X' ? 'O' : 'X');
    }
    return;
  }


}
