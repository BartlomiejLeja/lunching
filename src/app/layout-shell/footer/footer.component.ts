import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute,  NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() public activeRoute  :string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
