import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private httpClient: HttpClient) {}

  key = '98msqJO6G1A8kp9z2XVnvJlST4tpDXY7QictIRrlSYg';
  page = 5;
  per_page = 30;

  getImageWork() {
    return this.httpClient.get(
      `https://api.unsplash.com/search/collections?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}&query=work-from-home`
    );
  }

  getImageTechnology() {
    return this.httpClient.get(
      `https://api.unsplash.com/search/collections?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}&query=technology`
    );
  }

  getImageTravel() {
    return this.httpClient.get(
      `https://api.unsplash.com/search/collections?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}&query=travel`
    );
  }

  getImageNature() {
    return this.httpClient.get(
      `https://api.unsplash.com/search/collections?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}&query=nature`
    );
  }

  getImageFilm() {
    return this.httpClient.get(
      `https://api.unsplash.com/search/collections?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}&query=movie`
    );
  }

  getImageCurrent() {
    return this.httpClient.get(
      `https://api.unsplash.com/search/collections?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}&query=current`
    );
  }

  getImageBusiness() {
    return this.httpClient.get(
      `https://api.unsplash.com/search/collections?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}&query=business`
    );
  }

  getImageAnimals() {
    return this.httpClient.get(
      `https://api.unsplash.com/search/collections?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}&query=animals`
    );
  }
}
