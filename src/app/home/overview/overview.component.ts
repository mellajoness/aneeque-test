import { Component, OnInit } from '@angular/core';
import { faBell,faEdit,faShoppingBag,faUsers,faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  faBell=faBell;
  faEdit=faEdit;
  faShoppingBag=faShoppingBag;
  faUsers=faUsers;
  faStar=faStar
  constructor() { }

  ngOnInit(): void {
  }

}
