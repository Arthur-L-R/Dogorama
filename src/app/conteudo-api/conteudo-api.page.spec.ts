import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConteudoApiPage } from './conteudo-api.page';

describe('ConteudoApiPage', () => {
  let component: ConteudoApiPage;
  let fixture: ComponentFixture<ConteudoApiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
