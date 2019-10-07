import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoobarqixComponent } from './foobarqix.component';

describe('FoobarqixComponent', () => {
  let component: FoobarqixComponent;
  let fixture: ComponentFixture<FoobarqixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoobarqixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoobarqixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 1 when I input 1', () => {
    expect(component.compute('1')).toEqual('1');
  });

  it('should return 2 when I input 2', () => {
    expect(component.compute('2')).toEqual('2');
  });

  it('should return FooFoo when I input 3', () => {
    expect(component.compute('3')).toEqual('FooFoo');
  });

  // it('should have a string containing "Foo" when my input is divisible by 3', () => {

  // });
});
