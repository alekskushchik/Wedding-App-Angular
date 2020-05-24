import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  title = 'Our services';
  description = `We want to make your wedding day perfect that is why suggest a lot of options for dance:
  not only for a bride and groom but for their friends and relatives`;

  constructor() { }

  ngOnInit(): void {
  }

}
