import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="logo">
      <a  href="/">Wedding Dance</a>
    </div>
  `,
  styles: [`
    .logo a {
      padding: 28px 0 27px;
      font-weight: 600;
      font-size: 18px;
      line-height: 1;
      text-decoration: none;
    }
    a:visited {
      color: black;
      text-decoration: none;
    }
  `]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
