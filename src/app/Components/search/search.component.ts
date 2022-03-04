import { Component,ChangeDetectorRef, ElementRef, Input, HostListener, ViewChild} from '@angular/core';
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
export class SearchComponent  {
  ndex = searchClient.initIndex('users');

  visible = false;
  query!: string;
  hits!: any[];
  results: any;

  @ViewChild('searchInput') searchInput!: ElementRef;

   // Public toggles
   @Input() show = () => this.toggle(true);
   @Input() hide = () => this.toggle(false);
  constructor(private cd: ChangeDetectorRef, private el: ElementRef) { }

  @HostListener('document:keydown', ['$event'])
  keyDownHandler(e: KeyboardEvent) {
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyP') {
      // Ctrl + Shift + P shortcut to open the search box
      e.preventDefault();
      this.toggle(true);
    } else if (e.code === 'Escape') {
      // ESC to close the search box
      this.toggle(false);
    }
  }
  toggle(val: boolean) {
    this.visible = val;
    // Focus the input element
    this.searchInput.nativeElement.focus();
    this.cd.detectChanges();
  }

  async handleSearch(query: string) {
    this.query = query;
    this.results = await this.ndex.search(query);

    this.hits = this.results.hits;

    this.cd.detectChanges();
  }
}
