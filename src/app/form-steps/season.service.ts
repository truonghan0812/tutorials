import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export interface Iqueen {
  id: number;
  name: string;
  place: number;
}
export interface Iseason {
  id: number;
  seasonNumber: string;
  winnerId: number;
  image_url: string;
  queens: Iqueen[];
}

export interface Iepisode {
  id: number;
  title: string;
  episodeInSeason: number;
  seasonId: number;
  airDate: Date;
}

@Injectable({
  providedIn: FormsModule
})
export class SeasonService {

  constructor(private http: HttpClient) { }

  getSeasons() {
    return this.http.get<Iseason[]>(`http://www.nokeynoshade.party/api/seasons`);
  }

  getSeasonEpisodes(seasonId: number) {
    return this.http.get<Iepisode[]>(`http://www.nokeynoshade.party/api/seasons/${seasonId}/episodes`)
  }

  getQueens() {
    return this.http.get<Iqueen[]>(`http://www.nokeynoshade.party/api/queens/all`);
  }

  getLipsyncs() {
    return this.http.get<any[]>(`http://www.nokeynoshade.party/api/lipsyncs`);
  }
}
