import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      address: new FormGroup({
        town: new FormControl(),
        street: new FormControl(),
        postalCode: new FormControl()
      }),
      email: new FormControl(null, [Validators.required, Validators.email]),
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
