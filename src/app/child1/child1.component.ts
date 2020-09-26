import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, AfterViewInit, OnDestroy {
  public message: string;
  private unsubscribe$: Subject<void> = new Subject<void>();
  
  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.communicationService.tunnel2$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(v => this.message = `Taken from tunnel 2: ${v}`);
  }

  ngAfterViewInit(): void {
    this.communicationService.sendViaTunnel1('Hey!');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
