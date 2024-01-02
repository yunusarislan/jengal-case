import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  characterId: string | null = null;
  characterData: any = {}; // Değişiklik: any[] yerine any
  constructor(
    private apiService: ApiService,
    private acRouter: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const paramValue = this.acRouter.snapshot.paramMap.get('id');
    this.characterId = paramValue ? atob(paramValue) : null;
    this.getCharacter();
  }

  getCharacter(): void {
    const parseId = Number(this.characterId);
    this.apiService.getCharacter(parseId).subscribe({
      next: (data: any) => {
        this.characterData = data;
      },
    });
  }
}
