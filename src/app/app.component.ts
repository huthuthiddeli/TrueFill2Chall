import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HistoryFetcherService } from './history-fetcher.service';
import { PuuidObj } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  title = 'Fill2Chall';
  userObj: PuuidObj | null = null;

  constructor(private historyFetcher: HistoryFetcherService){}

  async ngOnInit(): Promise<void> {
    // Put the Fetchign Logic here
    this.historyFetcher.GetPuuid().subscribe((data: PuuidObj) => {
      console.log("Found item:" + data.gameName)
      this.userObj = data;
      localStorage.setItem("PuuidObj", JSON.stringify(data))
    }, error => {console.log("Error caught: " + error)})
  }


  
}
