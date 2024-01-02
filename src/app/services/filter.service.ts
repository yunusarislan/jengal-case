// filter-sort.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterSortService {
  constructor() {}

  filterByStatus(data: any[], name: string, species: string, status: string, gender: string): any[] {
    console.log("service");
    console.log(name);
    console.log(species);
    console.log(status);
    console.log(gender);
    return data.filter(item =>
      (!name || (item.name && item.name.toLowerCase().includes(name.toLowerCase()))) &&
      (!species || (item.species && item.species.toLowerCase().includes(species.toLowerCase()))) &&
      (!status || (item.status && item.status.toLowerCase() === status.toLowerCase())) &&
      (!gender || (item.gender && item.gender.toLowerCase() === gender.toLowerCase()))
    );
  }
  
}
