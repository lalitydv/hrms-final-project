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
  isMobile: boolean = false;
  sliderMode: string = 'side';

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit() {
    // Initialize the sidebar based on the initial view mode
    this.setupSidebar();

    this.breakpointObserver.observe(['(max-width: 720px)'])
      .subscribe(result => {
        this.isMobile = result.matches;
        if (this.isMobile) {
          this.sidenav.close();
          this.sliderMode = 'over';
        } else {
          this.sidenav.open();
          this.sliderMode = 'side';
        }
      });
  }

  // Function to toggle the sidebar and adjust the main content
  toggleSidenav() {
    this.sidenav.toggle();
  }

  private setupSidebar() {
    // Determine the view mode (desktop or mobile)
    const isMobile = this.breakpointObserver.isMatched('(max-width: 720px)');

    // Set sidebar behavior based on the view mode
    if (isMobile) {
      this.sidenav.mode = 'over'; // Drawer mode for mobile
      this.sidenav.close(); // Close the sidebar in mobile mode
    } else {
      this.sidenav.mode = 'side'; // Sidebar mode for desktop
      this.sidenav.open(); // Open the sidebar in desktop mode
    }
  }

  dropdownStates: { [key: string]: boolean } = {};

  toggleDropdown(key: string): void {
    for (let dropdownKey in this.dropdownStates) {
      if (dropdownKey !== key) {
        this.dropdownStates[dropdownKey] = false;
      }
    }

    this.dropdownStates[key] = !this.dropdownStates[key];
  }

  isDropdownOpen(key: string): boolean {
    return !!this.dropdownStates[key];
  }

  @ViewChild('drawer') drawer: MatDrawer | undefined;







  // ngAfterViewInit(): void {
  //   if (this.drawer) {
  //     this.sideBarService.setDrawer(this.drawer);
  //   }
  // }

  Logout() {

    this.router.navigate(['/']);
  }

}
