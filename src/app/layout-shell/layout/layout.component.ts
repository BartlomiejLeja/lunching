import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public activeRoute = this.router.url;
  constructor(private router: Router ) { }

  ngOnInit() {

    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe((event: NavigationEnd) => {
          console.log(event);
          this.activeRoute = event.url;
      });
  }

}
