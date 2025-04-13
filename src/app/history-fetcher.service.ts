import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { MatchDto, PuuidObj } from './types';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryFetcherService {

  constructor(private HttpClient: HttpClientService) { }

  GetPuuid(): Observable<PuuidObj>{
    let url = "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/GIRLS%20H4TE%20ME/INTEL";
    return this.HttpClient.get<PuuidObj>(url)
  }

  // queue 420 --> ONLY RANKED GAMES
  GetMatchStrings(puuid: string, start = 0, end = 10): Observable<string[]> {
    return this.HttpClient.get<string[]>(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?queue=420&start=${start}&count=${end}`)
  }  

  GetMatches(param: string[]): Observable<MatchDto[]>{
    // const reqs = param.map((item: string) => {
    //   return this.HttpClient.get<MatchDto>("https://europe.api.riotgames.com/lol/match/v5/matches/" + item)
    // })
    // return forkJoin(reqs);

    return forkJoin(param.map((item: string) => {
      return this.HttpClient.get<MatchDto>("https://europe.api.riotgames.com/lol/match/v5/matches/" + item)
    }))
  }


}
