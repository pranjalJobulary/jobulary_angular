import { Component,ChangeDetectorRef, ElementRef, Input, HostListener, ViewChild, OnInit } from '@angular/core';
import { IBasicDetails } from 'src/app/Models/IBasicDetails';
import { BasicdetailsService } from 'src/app/Services/basicdetails.service';
import algoliasearch from 'algoliasearch/lite';



const searchClient = algoliasearch(
  '1A71OH5VLN',
  '5914251440a70d38a969a4fec5bbcb6c'
);
@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  basicdetails!:IBasicDetails[]
  ndex = searchClient.initIndex('users');

  visible = false;
  query!: string;
  hits!: any[];
  results: any;

  @ViewChild('searchInput') searchInput!: ElementRef;

   // Public toggles
   @Input() show = () => this.toggle(true);
   @Input() hide = () => this.toggle(false);
  constructor( private basicdetailsService:BasicdetailsService,private cd: ChangeDetectorRef, private el: ElementRef) { }

  ngOnInit(): void {
    this.basicdetailsService.getBasicDetails().subscribe( data=>{
      this.basicdetails = data. map( e =>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as IBasicDetails
        }
      })
      console.log(data)
    })
  }
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
