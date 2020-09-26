import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private tunnel1Source: Subject<string> = new Subject<string>();
  public tunnel1$: Observable<string> = this.tunnel1Source.asObservable();

  private tunnel2Source: Subject<string> = new Subject<string>();
  public tunnel2$: Observable<string> = this.tunnel2Source.asObservable();

  public sendViaTunnel1(message: string): void {
    this.tunnel1Source.next(message);
  }

  public sendViaTunnel2(message: string): void {
    this.tunnel2Source.next(message);
  }
}
