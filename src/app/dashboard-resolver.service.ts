import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<string[]> {
  private readonly url = 'https://baconipsum.com/api/?type=meat-and-filler';

  constructor(private http: HttpClient) { }

  public resolve(): Observable<string[]> {
    return this.http.get<any>(this.url);
  }
}
