import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetQuatationPage } from './get-quatation.page';

describe('GetQuatationPage', () => {
  let component: GetQuatationPage;
  let fixture: ComponentFixture<GetQuatationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetQuatationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetQuatationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
