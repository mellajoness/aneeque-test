import { Component, OnInit } from '@angular/core';
import { faCoffee,faFileInvoice,faBorderAll,faShoppingBag,faCog,faUsers,faPaperPlane} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  faCoffee = faCoffee;
  faCog = faCog;
  faShoppingBag=faShoppingBag;
  faFileInvoice=faFileInvoice;
  faBorderAll=faBorderAll;
  faUsers=faUsers;
  faPaperPlane=faPaperPlane
  constructor() { }
   
  ngOnInit(): void {
  }

}
