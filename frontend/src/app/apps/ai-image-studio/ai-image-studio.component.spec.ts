import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiImageStudioComponent } from './ai-image-studio.component';

describe('AiImageStudioComponent', () => {
  let component: AiImageStudioComponent;
  let fixture: ComponentFixture<AiImageStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiImageStudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiImageStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
