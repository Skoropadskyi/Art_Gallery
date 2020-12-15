import { Component, OnInit } from '@angular/core';
import {CollectionsService} from '../../../../../services/collections.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private collectionService: CollectionsService) { }
  Items;

  ngOnInit(): void {
    this.collectionService.getImageWork().subscribe((resp: any) => {
      this.Items = resp.results;
      console.log(resp);
    });
  }
}
