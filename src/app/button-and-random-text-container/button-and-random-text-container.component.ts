import { Component } from '@angular/core';

@Component({
  selector: 'app-button-and-random-text-container',
  templateUrl: './button-and-random-text-container.component.html',
  styleUrls: ['./button-and-random-text-container.component.css']
})
export class ButtonAndRandomTextContainerComponent {
  public isComponentVisible = true;

  public onToggleChange(): void {
    this.isComponentVisible = !this.isComponentVisible;
  }
}
