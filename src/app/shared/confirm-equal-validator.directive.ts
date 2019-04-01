import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';


@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {
  validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
    const passField = passwordGroup.get('password');
    const confirmPassField = passwordGroup.get('cpassword');
    if (passField && confirmPassField && passField.value !== confirmPassField.value) {
      return { 'notEqual': true };
    }
    return null;
  }
}
