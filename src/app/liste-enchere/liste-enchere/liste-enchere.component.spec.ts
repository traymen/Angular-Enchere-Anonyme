import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEnchereComponent } from './liste-enchere.component';

describe('ListeEnchereComponent', () => {
  let component: ListeEnchereComponent;
  let fixture: ComponentFixture<ListeEnchereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEnchereComponent]
    });
    fixture = TestBed.createComponent(ListeEnchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
