import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {pluck} from "rxjs/operators";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log("data2", route.snapshot.params.data2);

    route.params.pipe(pluck("data2")).subscribe(data2 => {
      console.log("CHANGED", data2);
    });
  }

  ngOnInit() {
  }

  nextRecord() {
    this.router.navigate([".", {data2: "yyy"}], {
      relativeTo: this.route
    })

    return false;
  }
}
