import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, AfterViewInit, OnDestroy {
  public message: string;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.communicationService.tunnel1$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(v => this.message = `Taken from tunnel 1: ${v}`);
  }

  ngAfterViewInit(): void {
    this.communicationService.sendViaTunnel2('Hey from 2!');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
