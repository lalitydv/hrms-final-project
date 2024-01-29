import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chartOptions = {
	  animationEnabled: true,
	  title: {
		// text: "Crude Oil Reserves Vs Production"
	  },
	  axisX: {
		labelAngle: -90
	  },
	  // axisY: {
		// title: "billion of barrels"
	  // },
	  // axisY2: {
		// title: "million barrels/day"
	  // },
	  toolTip: {
		shared: true
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{
		type: "column",	
		name: "Slary",
		legendText: "Slary",
		showInLegend: true, 
		dataPoints:[
		  {label: "Jan", y: 262},
		  {label: "Feb", y: 211},
		  {label: "Mar", y: 175},
		  {label: "April", y: 137},
		  {label: "May", y: 115},
		  {label: "Jun", y: 104},
		  {label: "Jul", y: 97.8},
		  {label: "Aug", y: 60},
		  {label: "Sep", y: 23.3},
		  {label: "Oct", y: 20.4},
		  {label: "Nov", y: 50.4},
		  {label: "Dec", y: 70.4}
		]
	  }, {
		type: "column",	
		name: "Month",
		legendText: "Month",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[
		  {label: "Jan", y: 11.15},
		  {label: "Feb", y: 2.5},
		  {label: "Mar", y: 3.6},
		  {label: "April", y: 4.2},
		  {label: "May", y: 2.6},
		  {label: "Jun", y: 2.7},
		  {label: "Jul", y: 3.1},
		  {label: "Aug", y: 10.23},
		  {label: "Sep", y: 10.3},
		  {label: "Oct", y: 4.3},
      {label: "Nov", y: 50.4},
		  {label: "Dec", y: 70.4}
		]
	  }]
	}	

  // --------------------------Graph 2 --------------------
  chartOptions2 = {
		animationEnabled: true,
		theme: "light2",
		// title:{
		// 	text: "Site Traffic"
		// },
		axisX:{
			valueFormatString: "DD MMM",
			crosshair: {
				enabled: true,
				snapToDataPoint: true
			}
		},
		axisY: {
			// title: "Number of Visits",
			crosshair: {
				enabled: true
			}
		},
		toolTip:{
			shared:true
		},  
		legend:{
			cursor: "pointer",
			verticalAlign: "bottom",
			horizontalAlign: "right",
			dockInsidePlotArea: true,
			itemclick: function(e: any) {
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else{
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		data: [{
			type: "line",
			showInLegend: true,
			name: "Total Visit",
			lineDashType: "dash",
			markerType: "square",
			xValueFormatString: "DD MMM, YYYY",
			dataPoints: [
				{ x: new Date(2022, 0, 3), y: 650 },
				{ x: new Date(2022, 0, 4), y: 700 },
				{ x: new Date(2022, 0, 5), y: 710 },
				{ x: new Date(2022, 0, 6), y: 658 },
				{ x: new Date(2022, 0, 7), y: 734 },
				{ x: new Date(2022, 0, 8), y: 963 },
				{ x: new Date(2022, 0, 9), y: 847 },
				{ x: new Date(2022, 0, 10), y: 853 },
				{ x: new Date(2022, 0, 11), y: 869 },
				{ x: new Date(2022, 0, 12), y: 943 },
				{ x: new Date(2022, 0, 13), y: 970 },
				{ x: new Date(2022, 0, 14), y: 869 },
				{ x: new Date(2022, 0, 15), y: 890 },
				{ x: new Date(2022, 0, 16), y: 930 }
			]
		},
		{
			type: "line",
			showInLegend: true,
			name: "Unique Visit",
			lineDashType: "dot",
			dataPoints: [
				{ x: new Date(2022, 0, 3), y: 510 },
				{ x: new Date(2022, 0, 4), y: 560 },
				{ x: new Date(2022, 0, 5), y: 540 },
				{ x: new Date(2022, 0, 6), y: 558 },
				{ x: new Date(2022, 0, 7), y: 544 },
				{ x: new Date(2022, 0, 8), y: 693 },
				{ x: new Date(2022, 0, 9), y: 657 },
				{ x: new Date(2022, 0, 10), y: 663 },
				{ x: new Date(2022, 0, 11), y: 639 },
				{ x: new Date(2022, 0, 12), y: 673 },
				{ x: new Date(2022, 0, 13), y: 660 },
				{ x: new Date(2022, 0, 14), y: 562 },
				{ x: new Date(2022, 0, 15), y: 643 },
				{ x: new Date(2022, 0, 16), y: 570 }
			]
		}]
	}	
  // --------------------Graph3 --------------------
  chartOptions3 = {
	  animationEnabled: true,
	  title: {
		// text: "Sales by Department"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Toys" },
		  { y: 28.2, name: "Electronics" },
		  { y: 14.4, name: "Groceries" },
		  { y: 43.3, name: "Furniture" }
		]
	  }]
	}
}
