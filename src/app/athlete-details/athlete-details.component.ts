import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-athlete-details',
  templateUrl: './athlete-details.component.html',
  styleUrls: ['./athlete-details.component.css']
})
export class AthleteDetailsComponent implements OnInit {

  constructor(private dataService: DataProviderService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(console.log);
  }

}
