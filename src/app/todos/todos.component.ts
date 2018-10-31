import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoItems: any[];

  
  testArray: any[] = ["One","Two","Three"];
  addTodo(inputString){

  }

  test(){
    console.log(this.todoItems);
  }

  constructor(db: AngularFireDatabase) {
    

    db.list('/todos').valueChanges().subscribe( tdItem => {
      this.todoItems = tdItem;
      console.log(this.todoItems);
    });
    // this.dbList = db.list('/todos');

    // db.list('/todos').valueChanges()
    // .subscribe( todos => {
    //   this.todos = todos;
    //   console.log(todos);
    // } );
    
  }

  // makeTodo(todoText){
  //   this.dbList.push({todoName: todoText, completed: false });
  // }

  ngOnInit() {
  }

}
