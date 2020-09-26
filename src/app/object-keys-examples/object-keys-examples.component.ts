import { Component } from '@angular/core';

@Component({
  selector: 'app-object-keys-examples',
  templateUrl: './object-keys-examples.component.html',
  styleUrls: ['./object-keys-examples.component.css']
})
export class ObjectKeysExamplesComponent {
  public object = {
    a: 1,
    b: 2,
    c: 3
  };

}
