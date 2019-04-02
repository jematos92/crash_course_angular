import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingListItemComponent } from './add-shopping-list-item.component';

describe('AddShoppingListItemComponent', () => {
  let component: AddShoppingListItemComponent;
  let fixture: ComponentFixture<AddShoppingListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoppingListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
