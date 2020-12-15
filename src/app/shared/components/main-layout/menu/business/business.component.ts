import { Component, OnInit } from '@angular/core';
import {CollectionsService} from '../../../../../services/collections.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor(private collectionService: CollectionsService) { }
  Items;

  ngOnInit(): void {
    this.collectionService.getImageBusiness().subscribe((resp: any) => {
      this.Items = resp.results;
      console.log(resp);
    });
  }
}
