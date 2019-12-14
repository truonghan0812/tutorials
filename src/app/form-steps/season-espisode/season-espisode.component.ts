import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iseason, Iepisode, SeasonService } from '../season.service';
import { ControlContainer } from '@angular/forms';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-season-espisode',
  templateUrl: './season-espisode.component.html',
  styleUrls: ['./season-espisode.component.scss']
})
export class SeasonEspisodeComponent implements OnInit {

  seasons$: Observable<Iseason[]>;
  episodes$: Observable<Iepisode[]>;
  
  constructor(
    private seasonService: SeasonService,
    public controlContainer: ControlContainer
  ) { }

  ngOnInit() {
    this.seasons$ = this.seasonService.getSeasons();
    let seasonCtrl = this.controlContainer.control.get('favorite_season');
    this.episodes$ = seasonCtrl.valueChanges.pipe(
      switchMap((seasonId: number) => {
        return this.seasonService.getSeasonEpisodes(seasonId);
      })
    )
  }

}
