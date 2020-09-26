import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProviderService } from '../data-provider.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Athlete } from '../interfaces/athlete.interface';
import { notNullValidator } from '../validators/not-null.validator';
import { ageRangeValidator } from '../validators/age-range.validator';

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
      name: new FormControl(null, [Validators.required, notNullValidator]),
      surname: new FormControl(null, [Validators.required, notNullValidator]),
      age: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/), ageRangeValidator]),
      password: new FormControl(null, [Validators.required, notNullValidator, Validators.minLength(8)]),
      address: new FormGroup({
        town: new FormControl(null, [notNullValidator]),
        street: new FormControl(null, [notNullValidator]),
        postalCode: new FormControl(null, [notNullValidator])
      }),
      email: new FormControl(null, [Validators.required, notNullValidator, Validators.email]),
      phoneNumber: new FormControl(null, [Validators.pattern(/^\d+$/)]),
      isContactAvailable: new FormControl(),
      isActive: new FormControl(false, [Validators.required]),
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
