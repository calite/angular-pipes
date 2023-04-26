import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'daniel';
  public nameUpper: string = 'daniel';
  public fullName: string = 'daNiEl caMPos';

  public customDate: Date = new Date();

}
