import { Cell } from './Cell';
import { Colors } from './Colors';
import { Bishop } from './figures/Bishop';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Rook } from './figures/Rook';

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, i, j, Colors.BLACK, null)); //Черный ячейки
        } else {
          row.push(new Cell(this, i, j, Colors.WHITE, null)); // Белые ячейки
        }
      }

      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public addFigures() {
    this.addPawn();
    this.addQueen();
    this.addBishop();
    this.addRook();
    this.addKnight();
    this.addKing();
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }

  private addPawn() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(6, i));
      new Pawn(Colors.WHITE, this.getCell(1, i));
    }
  }
  private addQueen() {
    new Queen(Colors.BLACK, this.getCell(7, 3));
    new Queen(Colors.WHITE, this.getCell(0, 3));
  }
  private addBishop() {
    new Bishop(Colors.BLACK, this.getCell(7, 2));
    new Bishop(Colors.BLACK, this.getCell(7, 5));

    new Bishop(Colors.WHITE, this.getCell(0, 2));
    new Bishop(Colors.WHITE, this.getCell(0, 5));
  }
  private addRook() {
    new Rook(Colors.BLACK, this.getCell(7, 0));
    new Rook(Colors.WHITE, this.getCell(0, 7));
    new Rook(Colors.BLACK, this.getCell(7, 7));
    new Rook(Colors.WHITE, this.getCell(0, 0));
  }
  private addKnight() {
    new Knight(Colors.BLACK, this.getCell(7, 1));
    new Knight(Colors.BLACK, this.getCell(7, 6));

    new Knight(Colors.WHITE, this.getCell(0, 1));
    new Knight(Colors.WHITE, this.getCell(0, 6));
  }
  private addKing() {
    new King(Colors.BLACK, this.getCell(7, 4));
    new King(Colors.WHITE, this.getCell(0, 4));
  }
}
