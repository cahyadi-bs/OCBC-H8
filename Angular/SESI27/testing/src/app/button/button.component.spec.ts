import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a name 'Klik aku mas'`, (() =>{
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.name).toBe('Klik aku mas')
  }));
  it(`should create a button with name`, () =>{
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toBe('Klik aku mas')
  })
});
