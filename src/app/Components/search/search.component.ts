import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';



const searchClient = algoliasearch(
  '1A71OH5VLN',
  '5914251440a70d38a969a4fec5bbcb6c'
);
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  config = {
    indexName: 'users',
    searchClient
  };

  constructor() { }

  ngOnInit(): void {
  }

}
