import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newSongs: any[] = []
  loading : boolean

  error: boolean
  messageError: string

  constructor(private spotify: SpotifyService) { }

  getNewReleases(){
    this.loading = true
    this.error = false

    this.spotify.getReleases()
    .subscribe((res: any) => {

      console.log(res)
      this.newSongs = res
      this.loading = false

    }, ( errorService ) => {

      this.loading= false
      this.error= true
      console.log(errorService)
      this.messageError = errorService.error.error.message

    });
  }

  ngOnInit() {
  }

}
