import { style } from '@angular/animations';
import { Component,Input } from '@angular/core';

interface SideNavToggle
{
  screenWidth : number;
  collapsed: boolean;
}
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
 

  isSideNavCollapsed = false;
  screenWidht=0;
  @Input() collapsed = false;
  @Input() screenWidth = 0; 
  getBodyClass(): String
  {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768)
    {
      styleClass = 'body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0)
    {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
  onToggleSideNav(data : SideNavToggle): void 
  {
    this.screenWidht=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed
  }
 
}
