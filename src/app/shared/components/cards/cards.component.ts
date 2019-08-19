// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cards',
//   templateUrl: './cards.component.html',
//   styleUrls: ['./cards.component.scss']
// })
// export class CardsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }


  verArtista( item: any ) {

    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/artist', artistaId  ]);

  }

}