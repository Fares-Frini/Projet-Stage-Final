import { Component , OnInit} from '@angular/core';
interface SideNavToggle
{
  screenWidth : number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'frontend';

  ngOnInit() {
  }
  isSideNavCollapsed = false;
  screenWidht=0;
  onToggleSideNav(data : SideNavToggle): void 
  {
    this.screenWidht=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed
  }

   
}
