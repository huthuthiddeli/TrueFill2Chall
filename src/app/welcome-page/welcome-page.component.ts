import { Component, OnInit } from '@angular/core';
import { HistoryFetcherService } from '../history-fetcher.service';
import { MatchDto, PuuidObj } from '../types';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-welcome-page',
  imports: [
    CommonModule,
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})

export class WelcomePageComponent implements OnInit{
  matchesstring: string[] | null = null;
  matches: MatchDto[] | null = null;
  puuidObj: PuuidObj  | null = null;

  constructor(private historyFetcher: HistoryFetcherService)
  {}


  async ngOnInit(): Promise<void> {
    let puuidObj: PuuidObj = JSON.parse(localStorage.getItem("PuuidObj") as string)
    this.puuidObj = puuidObj;
    this.historyFetcher.GetMatchStrings(puuidObj.puuid, 0, 10).subscribe((data: string[]) => {
      this.matchesstring = data;
      
      this.historyFetcher.GetMatches(this.matchesstring).subscribe((item: MatchDto[]) => {
        console.log(item[0])
        this.matches = item
      })
    }, error => {console.log("Error caught: " + error)})
  
  }

}
