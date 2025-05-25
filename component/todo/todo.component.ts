import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  taskArray = [{ taskName: 'Immigrate to Canada', isCompleted: false }];
  
  todo:string=""
  tada:number=0
      constructor() { }

  ngOnInit(): void {}
  
  add (item:string):string{
    return item===''?  "ADD TASK":"UPDATE TASK"
  }

  

  

   onSubmit(form: NgForm) {
    console.log(form);
    if (this.todo==="")
    {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })}else{this.taskArray[this.tada].taskName=form.controls['task'].value
    
    }
    this.todo=''
    form.reset();
  }

   onEdit(index: number) {
    console.log(this.taskArray[index]);
    this.todo=this.taskArray[index].taskName;
    this.tada=index
    
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

}
