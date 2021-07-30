import { Component, OnInit } from '@angular/core';
import { faSearch,faShoppingBag,faChartPie,faUsers,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
// import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { Label } from 'ng2-charts';
  
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faSearch=faSearch;
  faShoppingBag=faShoppingBag;
  faChartPie=faChartPie;
  faUsers=faUsers;
  faShoppingCart=faShoppingCart;
  myChart:any

  // constructor() { }

  ngOnInit() {
  this.myChart = new Chart('canvas', {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '# of Expense',
            data: [4, 9, 8, 5, 2, 3,8, 7, 3, 5, 2, 3],
            backgroundColor:'#97C1FE' ,
            borderColor:'' ,
            borderRadius:20,
          
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  }

}
