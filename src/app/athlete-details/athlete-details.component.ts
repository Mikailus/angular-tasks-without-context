import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataProviderService } from '../data-provider.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Athlete } from '../interfaces/athlete.interface';

@Component({
  selector: 'app-athlete-details',
  templateUrl: './athlete-details.component.html',
  styleUrls: ['./athlete-details.component.css']
})
export class AthleteDetailsComponent implements OnInit, OnDestroy {
  public athleteForm: FormGroup;
  public formValue: Athlete;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private dataService: DataProviderService) { }

  ngOnInit(): void {
    this.athleteForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      age: new FormControl(),
      password: new FormControl(),
      address: new FormGroup({
        town: new FormControl(),
        street: new FormControl(),
        postalCode: new FormControl()
      }),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      isContactAvailable: new FormControl(),
      isActive: new FormControl(),
      favouriteSportDiscipline: new FormControl(),
    });

    this.athleteForm.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(v => this.formValue = v);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
