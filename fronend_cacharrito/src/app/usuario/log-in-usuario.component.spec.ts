import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInUsuarioComponent } from './log-in-usuario.component';

describe('LogInUsuarioComponent', () => {
  let component: LogInUsuarioComponent;
  let fixture: ComponentFixture<LogInUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogInUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
