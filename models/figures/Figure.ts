// import logo from '../../assets/figures/black-king.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureName {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

export class Figure {
  colors: Colors;
  logo: any | null;
  cell: Cell;
  name: FigureName;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.colors = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureName.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.colors === this.colors) {
      return false;
    }
    if (target.figure?.name === FigureName.KING) {
      return false;
    } else return true;
  }

  moveFigure(target: Cell) {}
}
