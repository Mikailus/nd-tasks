import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { User } from '../user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { notNullValidator } from '../validators/not-null.validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  public isInEditMode = false;
  public userFormGroup: FormGroup;

  ngOnInit(): void {
    this.userFormGroup = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        notNullValidator
      ]),
      phoneNumber: new FormControl(this.user.phone, [
        Validators.required,
        Validators.minLength(9)
      ]),
      email: new FormControl(this.user.email)
    });

    this.userFormGroup.valueChanges.subscribe(console.log);
  }

  onDeleteButtonClick(): void {
    this.delete.emit(this.user.id);
  }

  toggleEditMode(): void {
    this.isInEditMode = !this.isInEditMode;
  }

  onSaveClick(): void {
    console.log(this.userFormGroup.value);
    this.toggleEditMode();
  }
}
