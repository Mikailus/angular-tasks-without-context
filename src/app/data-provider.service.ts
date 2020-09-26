import { Injectable } from '@angular/core';
import { Observable, of, scheduled } from 'rxjs';
import { Athlete } from './interfaces/athlete.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  public getData(): Observable<Athlete> {
    const athlete: Athlete = {
      name: 'Jan',
      surname: 'Kowalski',
      age: 28,
      password: 'jW6Ytr80-w',
      address: {
        town: 'Kartuzy',
        street: 'Kolejowa',
        postalCode: '80-324'
      },
      email: 'jan@kowalski.pl',
      phoneNumber: '345987621',
      isContactAvailable: true,
      isActive: false,
      favouriteSportDiscipline: 'running'
    }
    return of(athlete);
  }
}
