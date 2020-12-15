import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  searchResults: any;
  queryField: FormControl = new FormControl();
  results: any;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {

    this.queryField.valueChanges.subscribe(queryField  => this.searchService.searchPhoto(queryField).subscribe((data: any) => {
      this.searchResults = data.results;
      // console.log(this.searchResults);
    }));
  }

}
