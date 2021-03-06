import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courseName = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseName = this.route.snapshot.params.courseName;
  }

}
