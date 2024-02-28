import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sideNavMenu: any[]=[
    {label: 'Home', icon: 'home', route: 'home'},
    {label: 'About', icon: 'person', route: 'about'},
    {label: 'Resume', icon: 'upload_file', route: 'resume'},
    {label: 'Projects', icon: 'approval', route: 'project'},
  ]

  socialIcons: any[]=[1,2,3,4,5]
}
