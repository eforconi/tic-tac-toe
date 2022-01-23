import { Component } from '@angular/core';
import { InformationDialogService } from './features/services/information-dialog.service';
import { InformationDialog } from './models/information-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
  gameActive = true;
  currentPlayer = "X";
  turnCounter = 0;
  boardState = ["", "", "", "", "", "", "", "", ""];
  winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

options:InformationDialog = {
  title:"Congratulations!!!!",
  message:`The Winner is ${this.currentPlayer}`,
  background: 'url(https://i.pinimg.com/originals/e5/83/3e/e5833e1bea7d379f0f4e4ae250b7cf81.gif)',
  confirmText: 'Done',
};

constructor(private dialogService: InformationDialogService){}


  cellClicked(index:number){
    console.log(index);
    if (this.boardState[index] !== "" || !this.gameActive) {
      return;
    }
    this.cellPlayed(index);
    this.checkWinner();
  }

  cellPlayed(index:number) {
    console.log(index);
    this.turnCounter+=1;
    this.boardState[index] = this.currentPlayer;
  }
  checkWinner(){
    if(this.turnCounter>=4){
      let roundWon = false;
      for (let i = 0; i <= 7; i++) {
          const winCondition = this.winConditions[i];
          let a = this.boardState[winCondition[0]];
          let b = this.boardState[winCondition[1]];
          let c = this.boardState[winCondition[2]];
          console.log(a,b,c);
          if (a === '' || b === '' || c === '') {
              continue;
          }
          if (a === b && b === c) {
            this.dialogService.open(this.options);
            this.gameActive = false;
            this.restartGame();
            break
          }
      }
    }
    this.changePlayer();
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }
  
  restartGame() {
    this.gameActive = true;
    this.currentPlayer = "X";
    this.boardState = ["", "", "", "", "", "", "", "", ""];
    if(this.turnCounter===8){
      window.alert("Draw!")
      this.gameActive = false;
      this.restartGame();
      return;
    }
  }
}


