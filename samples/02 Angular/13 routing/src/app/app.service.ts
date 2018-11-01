import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {appStore} from "./appStore";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router: Router) { }

  async gotoAbout() {
    appStore.aboutTitle = await loadDataFromServer();

    this.router.navigate(["/about", {id: 123}]);
  }
}

async function loadDataFromServer() {
  return "XXX";
}
