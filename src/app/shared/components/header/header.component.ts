import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { HomeComponent } from 'src/app/containers/home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private releases: HomeComponent) { }

  getNewReleases(){
   this.releases.getNewReleases()
    
  }

  ngOnInit() {
  }

}
