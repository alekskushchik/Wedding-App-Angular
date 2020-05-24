import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  items: { title: string, link: string }[] = [
    {
      title: 'Services',
      link: '#services'
    },
    {
      title: 'Our Coaches',
      link: '#ourcoaches'
    },
    {
      title: 'Testimonials',
      link: '#testimonials'
    },
    {
      title: 'FAQ',
      link: '#faq'
    },
    {
      title: 'Lesson Review',
      link: '#lessonreview'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
