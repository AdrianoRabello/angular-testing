import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchIttem } from 'src/app/models/searchItem';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  apiRoot: string  = 'https://itunes.apple.com/search';
  results: SearchIttem[];

  constructor(private http:HttpClient) {

   }

   searchItem(item:string){
    return new Promise((resolve, reject) => {
        this.results = [];
        let apiUrl = `${this.apiRoot}?term=${item}&media=music&limit=20&calback=JSON_CALBACK`

        this.http.get(apiUrl).toPromise().then(
          (res:any[]) => {
            this.results = res.map(item => {
              console.log("item ", item);
              return new SearchIttem(item['trackname'],
                                    item['artistName'],
                                    item['artworkUrl60'],
                                    item['artistId']);
            })
            resolve(this.results);
          })

    })
   }
}
