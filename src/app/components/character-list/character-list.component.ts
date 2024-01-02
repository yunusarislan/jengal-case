import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FilterSortService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  charactersData: any[] = [];
  backgroundImageUrls: any[] = [];
  currentPage = 1;
  totalPages: number = 1;
  maxPagesToShow = 5;
  selectedName: string = '';
  selectedSpecies: string = '';
  selectedStatus: string = '';
  selectedGender: string = '';
  constructor(
    private apiService: ApiService,
    private filterSortService: FilterSortService,
    private router: Router,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page: number): void {
    this.apiService.getCharacters(page).subscribe({
      next: (data: any) => {
        this.charactersData = data.results;
        this.totalPages = data.info.pages;
        this.scrollToTop();
      },
    });
  }

  changePage(page: number, event: Event): void {
    event.preventDefault();
    if (this.isValidPage(page)) {
      this.currentPage = page;
      this.getCharacters(this.currentPage);
    }
  }

  nextPage(event: Event): void {
    event.preventDefault();
    if (this.isValidPage(this.currentPage + 1)) {
      this.currentPage++;
      this.getCharacters(this.currentPage);
    }
  }

  prevPage(event: Event): void {
    event.preventDefault();
    if (this.isValidPage(this.currentPage - 1)) {
      this.currentPage--;
      this.getCharacters(this.currentPage);
    }
  }

  isValidPage(page: number): boolean {
    return page >= 1 && page <= this.totalPages;
  }

  getPageNumbers(): number[] {
    const startPage = Math.max(1, this.currentPage - Math.floor(this.maxPagesToShow / 2));
    const endPage = Math.min(this.totalPages, startPage + this.maxPagesToShow - 1);

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  scrollToTop(): void {
    this.elementRef.nativeElement.ownerDocument.body.scrollTop = 0;
    this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop = 0;
  }

  goCharacterDetail(id: string) {
    this.router.navigate(["/character-details", btoa(id)]);
  }

  searchCharacters(name: string, species: string, status: string, gender: string): void {
    this.charactersData = this.filterSortService.filterByStatus(this.charactersData, name, species, status, gender);
  }

  clearFilters(nameInput: any, typeInput: any, statusSelect: any, genderSelect: any) {
    nameInput.value = '';
    typeInput.value = '';
    statusSelect.value = '';
    genderSelect.value = '';
    this.getCharacters(this.currentPage)
  }
}
