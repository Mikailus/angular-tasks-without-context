import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick(): void {
    this.toggle.emit();
  }
}
