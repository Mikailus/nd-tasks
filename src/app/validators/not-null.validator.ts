import { FormControl } from '@angular/forms';

interface notNullError {
  notNull: boolean;
}

export function notNullValidator(control: FormControl): notNullError | null {
  const value: string = control.value;

  if (value.trim().length === 0) {
    return {
      notNull: true
    };
  }
  return null;
}
