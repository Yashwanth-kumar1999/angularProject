
import { Component, OnInit } from '@angular/core';
import { SoldHistory } from '../sold-history';
import { SoldHistoryService } from '../sold-history.service';

@Component({
  selector: 'app-farmer-soldhistory',
  templateUrl: './farmer-soldhistory.component.html',
  styleUrls: ['./farmer-soldhistory.component.css']
})
export class FarmerSoldhistoryComponent implements OnInit {

  soldHistory!:SoldHistory[]

  constructor( private soldService:SoldHistoryService ) {



  }

  ngOnInit(): void {


    this.soldService.getAllSoldHistory().subscribe({
      next:data=>console.log(data)
    })
console.log(this.soldHistory)
// console.log(this.soldHistory.History)

    // console.log(JSON.stringify( this.soldHistory));
  }

}
