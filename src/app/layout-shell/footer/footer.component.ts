import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute,  NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddLunchSpotDialogComponent } from 'src/app/delivery/add-lunch-spot-dialog/add-lunch-spot-dialog.component';
import { DeliveryService } from 'src/app/delivery/shared/services/delivery.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() public activeRoute: string;

  constructor(private router: Router,
    public dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddLunchSpotDialogComponent, {
      width: '350px',
    });
  }
}
