import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {

  title = 'Our Coaches';
  description = `Coaches in our school are not only perfect dancers but also have a big experience in coaching that
    is why you will feel really amazing after each of your class`;

  constructor() { }

  ngOnInit(): void {
  }

}
