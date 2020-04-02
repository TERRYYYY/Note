import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialogModule } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clickCounter: number =0;
  // constructor(){ }

  constructor(private dialog: MatDialog, private snackbar: MatSnackBar) { }
  
  openDialog(){
    // alert('hello')
    this.dialog.open(DialogueComponent)
  }

  ngOnInit(): void {
  }
  countClick(){
    this.clickCounter +=1;
  }

}
