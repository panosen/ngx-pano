import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoButtonComponent } from './pano-button.component';

describe('PanoButtonComponent', () => {
    let component: PanoButtonComponent;
    let fixture: ComponentFixture<PanoButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PanoButtonComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PanoButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set class danger', () => {
        component.color = 'danger';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList).toContain('status-danger');
    });

    it('should set size small', () => {
        component.size = 'small';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList).toContain('size-small');
    });

    it('should set outline class', () => {
        component.appearance = 'outline';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList).toContain('appearance-outline');
    });

    it('should set hero class', () => {
        component.appearance = 'hero';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList).toContain('appearance-hero');
    });

    it('should set shape class', () => {
        component.shape = 'semi-round';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList).toContain('shape-semi-round');
    });

    it('should set full-width class', () => {
        //component.fullWidth = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.classList).toContain('full-width');
    });
});
