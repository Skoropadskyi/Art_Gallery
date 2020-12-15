import { Component, OnInit } from '@angular/core';
import {CollectionsService} from '../../../../../services/collections.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  constructor(private collectionService: CollectionsService) { }
  Items;

  ngOnInit(): void {
    this.collectionService.getImageTravel().subscribe((resp: any) => {
      this.Items = resp.results;
      console.log(resp);
    });
  }
}
