//https://www.code-sample.com/2017/09/angular-4-form-password-match-validator.html

import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
    multi: true
  }]
})
export class EqualValidator implements Validator {
  constructor( @Attribute('validateEqual') public validateEqual: string, @Attribute('reverse') public reverse: string) {
  }

  private get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true' ? true: false;
  }

  validate(abstractControl: AbstractControl): { [key: string]: any } {
    // self value
    let value = abstractControl.value;

    // control value
    let control = abstractControl.root.get(this.validateEqual);

    // value not equal
    if (control && value !== control.value && !this.isReverse) {
      return {
        validateEqual: false
      }
    }

    // value equal and reverse
    if (control && value === control.value && this.isReverse) {
      delete control.errors['validateEqual'];
      if (!Object.keys(control.errors).length) control.setErrors(null);
    }

    // value not equal and reverse
    if (control && value !== control.value && this.isReverse) {
      control.setErrors({
        validateEqual: false
      })
    }

    return null;
  }
}
