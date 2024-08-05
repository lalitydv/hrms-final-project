// sidebar.component.ts
import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

 
  ngOnInit() {
    // Initialize the sidebar based on the initial view mode
    this.setupSidebar();


    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
    .subscribe(result => {
      this.isMobile = result.matches;
      if (this.isMobile) {
        this.sliderMode = 'over'
      } else {
        this.sliderMode = 'side'
      }

    });
  }

  // Function to toggle the sidebar and adjust the main content
  toggleSidenav() {
    this.sidenav.toggle();
  }

  private setupSidebar() {
    // Determine the view mode (desktop or mobile)
    const isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);

    // Set sidebar behavior based on the view mode
    if (isMobile) {
      this.sidenav.mode = 'over'; // Drawer mode for mobile
      this.sidenav.close(); // Close the sidebar in mobile mode
    } else {
      this.sidenav.mode = 'side'; // Sidebar mode for desktop
      this.sidenav.open(); // Open the sidebar in desktop mode
    }
  }
    dropdownState: { [key: string]: boolean } = {};

  toggleDropdown(key: string): void {
    this.dropdownState[key] = !this.dropdownState[key];
  }

  isDropdownOpen(key: string): boolean {
    return this.dropdownState[key];
  }

  @ViewChild('drawer') drawer: MatDrawer | undefined;
  isMobile!: boolean;
  sliderMode: any;




 

  // ngAfterViewInit(): void {
  //   if (this.drawer) {
  //     this.sideBarService.setDrawer(this.drawer);
  //   }
  // }
  
  Logout(){
  
    this.router.navigate(['/']);
  }
  
}
