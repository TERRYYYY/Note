import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mynote } from '../mynote'

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) {
    this.notes=['Terry', 'be yourself','Einstein']
   }

  openSnackBar(message,action){
    this.snackbar.open(message,action,{duration:50000000})
    // this.snackbar.open(toString(), '', {
    //   duration: 50000000000,
    //   verticalPosition: 'bottom'
    // });
  }
  notes: string[];

  onSubmit(){
    console.log(this.notes)
  }

  ngOnInit(): void {
  }

}
