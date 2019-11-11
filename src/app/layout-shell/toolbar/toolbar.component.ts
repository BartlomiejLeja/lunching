import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() public activeRoute: string;
  constructor() { }

  public ngOnInit(): void {
  }

  public titleCreator(): string {
    return this.activeRoute === '/provideddelivery' ? 'Dostarczone' : 'Oczekujące';
  }
}
