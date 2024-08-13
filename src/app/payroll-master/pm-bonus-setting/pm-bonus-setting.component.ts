import { Component, AfterViewInit } from '@angular/core';

declare const Calendar: any;

@Component({
  selector: 'app-pm-bonus-setting',
  templateUrl: './pm-bonus-setting.component.html',
  styleUrls: ['./pm-bonus-setting.component.css']
})
export class PmBonusSettingComponent {
  panelOpenState = true;
  Bonus = true;
  FirstIcons: String = "assets/Dashboard/image 78.png"
  HearderHeding: String = "Bonus Setting"

  constructor() { }

  ngAfterViewInit(): void {
    this.initCalendar();
  }

  initCalendar(): void {
    const calendar = new Calendar({
      crudManager: {
        eventStore: {
          fields: [
            { name: 'room' }
          ]
        },
        transport: {
          load: {
            url: 'data/data.json'
          }
        },
        autoLoad: true
      },
      appendTo: 'container',
      sidebar: null,
      modes: {
        agenda: null,
        year: null,
        week: null,
        day: null
      }
    });
  }
}
