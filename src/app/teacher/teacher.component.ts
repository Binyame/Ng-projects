import { Component, OnInit } from '@angular/core';
import { Teachers } from '../teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  teachers = Teachers;
  principle = 'Principle';

  constructor() {}

  ngOnInit(): void {}
}
