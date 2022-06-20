import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];

  constructor(private http: HttpClient) {

  }

  searchItem(item: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let apiUrl = `${this.apiRoot}?term=${item}&media=music&limit=20`

      this.http.get(apiUrl).toPromise().then(
        (res: any) => {
          this.results = res.results.map((item) => {
            console.log("item ", item);

            return new SearchItem(
              item.trackName,
              item.artistName,
              item.artworkUrl60,
              item.artistId
            );
          })
          resolve(this.results);
        })

    })
  }
}
