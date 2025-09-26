import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesPage } from './countries.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CountriesPage', () => {
  let component: CountriesPage;
  let fixture: ComponentFixture<CountriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [CountriesPage]
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
