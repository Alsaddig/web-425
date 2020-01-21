import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {

  canDeactivate(component: ProductDetailComponent) {
    if (component.name.dirty) {
      return window.confirm("You have unsaved changes. Still want to leave?");
    } else {
      return true;
    }
  }
}
