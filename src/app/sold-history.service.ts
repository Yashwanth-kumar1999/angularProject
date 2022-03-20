import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoldHistory } from './sold-history';

@Injectable({
  providedIn: 'root'
})
export class SoldHistoryService {


  private HISTORY!:SoldHistory[];

  constructor(private http:HttpClient) { }

  private url="http://localhost:8083/getAllFarmerSoldHistory/53"

getAllSoldHistory():Observable<SoldHistory[]>{


return this.http.get<SoldHistory[]>(`${this.url}`);

}


}
