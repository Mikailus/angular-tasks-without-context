import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden-words',
  templateUrl: './forbidden-words.component.html',
  styleUrls: ['./forbidden-words.component.css']
})
export class ForbiddenWordsComponent {
  public forbiddenWords = ['HEHEHE'];
}
