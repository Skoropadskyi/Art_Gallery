import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

 clientID = '98msqJO6G1A8kp9z2XVnvJlST4tpDXY7QictIRrlSYg';
 baseUrl: string =  'https://api.unsplash.com/search/photos?per_page=999&client_id=' + this.clientID + '&query=';

 constructor(private http: HttpClient) {}

 public searchPhoto(query: string) {
   const URL = this.baseUrl + query;
   return this.http.get(URL);
 }
}
