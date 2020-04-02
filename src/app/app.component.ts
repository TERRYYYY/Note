import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../app/dialogue/dialogue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroes';
  // constructor(){ }
  constructor(public dialogue: MatDialog) { }

  openDialogue() {
    this.dialogue.open(DialogueComponent)
  }



  ngOnInit(): void {
  }
}



