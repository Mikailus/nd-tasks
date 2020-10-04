import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: User;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

onDeleteButtonClick(): void {
  this.delete.emit(this.user.id);
}

}
