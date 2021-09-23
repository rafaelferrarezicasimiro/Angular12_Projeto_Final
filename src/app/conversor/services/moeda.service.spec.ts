import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MoedaService } from './moeda.service';
import { ConversorService } from '.';

describe('MoedaService', () => {
  let service: MoedaService;

  beforeEach(() => {
    /*TestBed.configureTestingModule({
      providers: [
        ConversorService
      ],
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(MoedaService);*/
  });

  it('should be created', () => {
    /*expect(service).toBeTruthy();*/
  });
});
