import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAddComponent } from './botao-add.component';

describe('BotaoAddComponent', () => {
  let component: BotaoAddComponent;
  let fixture: ComponentFixture<BotaoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
