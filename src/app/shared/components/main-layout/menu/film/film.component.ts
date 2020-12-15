import { Component, OnInit } from '@angular/core';
import {CollectionsService} from '../../../../../services/collections.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor(private collectionService: CollectionsService) { }
  Items;

  ngOnInit(): void {
    this.collectionService.getImageFilm().subscribe((resp: any) => {
      this.Items = resp.results;
      console.log(resp);
    });
  }

}
