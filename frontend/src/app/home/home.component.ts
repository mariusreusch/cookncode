import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";

@Component({
  selector: 'cac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.homeService.getUser().subscribe(user => {
      return this.user = user;
    });
  }
}
