import { Component, OnInit } from '@angular/core';
import {CollectionsService} from '../../../../../services/collections.service';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.scss']
})
export class NatureComponent implements OnInit {

  constructor(private collectionService: CollectionsService) { }
  Items;

  ngOnInit(): void {
    this.collectionService.getImageNature().subscribe((resp: any) => {
      this.Items = resp.results;
      console.log(resp);
    });
  }

}
