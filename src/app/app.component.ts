import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-data';

  constructor(){
    let lunchSpots =  [
      
          { 
             "id":106852,
             "name":"garaż",
             "status":"UNDELIVERED",
             "address":"street 1",
             "company":"company 1",
             "deliveryTime":"12:30"
          },
          { 
             "id":106862,
             "name":"stara portiernia, skrzydło prawe",
             "status":"UNDELIVERED",
             "address":"street 2",
             "company":"company 2",
             "deliveryTime":"12:30"
          },
          { 
             "id":106859,
             "name":"stara portiernia, skrzydło prawe",
             "status":"DELIVERED",
             "address":"street 3",
             "company":"company 3",
             "deliveryTime":"12:30"
          },
          { 
             "id":106857,
             "name":"stara portiernia, skrzydło prawe",
             "status":"DELIVERED",
             "address":"street 4",
             "company":"company 4",
             "deliveryTime":"12:30"
          },
          { 
             "id":106860,
             "name":"garaż",
             "status":"UNDELIVERED",
             "address":"street 5",
             "company":"company 5",
             "deliveryTime":"12:30"
          },
          { 
             "id":106868,
             "name":"company 6, kuchnia",
             "status":"UNDELIVERED",
             "address":"street 6",
             "company":"company 6",
             "deliveryTime":"12:30"
          },
          { 
             "id":106903,
             "name":"stara portiernia, skrzydło prawe",
             "status":"DELIVERED",
             "address":"street 7",
             "company":"company 7",
             "deliveryTime":"12:30"
          },
          { 
             "id":106855,
             "name":"garaż",
             "status":"UNDELIVERED",
             "address":"street 8",
             "company":"company 8",
             "deliveryTime":"12:30"
          },
          { 
             "id":106906,
             "name":"Amusys, kuchnia",
             "status":"UNDELIVERED",
             "address":"street 9",
             "company":"company 9",
             "deliveryTime":"12:30"
          },
          { 
             "id":106916,
             "name":"Kuchnia w firmie company 10, 3 piętro, H2",
             "status":"UNDELIVERED",
             "address":"street 10",
             "company":"company 10",
             "deliveryTime":"13:30"
          },
          { 
             "id":107068,
             "name":"siedziba firmy ",
             "status":"UNDELIVERED",
             "address":"street 11",
             "company":"company 11",
             "deliveryTime":"13:30"
          },
          { 
             "id":107013,
             "name":"siedziba firmy ",
             "status":"UNDELIVERED",
             "address":"street 12",
             "company":"company 12",
             "deliveryTime":"13:30"
          },
          { 
             "id":106921,
             "name":"company 13, kuchnia",
             "status":"UNDELIVERED",
             "address":"street 13",
             "company":"company 13",
             "deliveryTime":"12:30"
          },
          { 
             "id":106946,
             "name":"company 14, kuchnia",
             "status":"UNDELIVERED",
             "address":"street 14",
             "company":"company 14",
             "deliveryTime":"12:30"
          },
          { 
             "id":106872,
             "name":"garaż",
             "status":"UNDELIVERED",
             "address":"street 15",
             "company":"company 15",
             "deliveryTime":"12:30"
          },
          { 
             "id":107032,
             "name":"Kuchnia w firmie company 16, 3 piętro, H2",
             "status":"UNDELIVERED",
             "address":"street 16",
             "company":"company 16",
             "deliveryTime":"13:30"
          },
          { 
             "id":106961,
             "name":"siedziba firmy ",
             "status":"UNDELIVERED",
             "address":"street 17",
             "company":"company 17",
             "deliveryTime":"13:30"
          }
    ]
    
     localStorage.setItem("lunchSpots", JSON.stringify(lunchSpots));
  }
}
