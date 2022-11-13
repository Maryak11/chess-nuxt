import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureName } from './Figure';
import blackLogo from '../../assets/figures/black-pawn.png';
import whiteLogo from '../../assets/figures/white-pawn.png';

export class Pawn extends Figure {
  isFirstStep: boolean = true;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureName.PAWN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const direction = this.cell.figure?.colors === Colors.WHITE ? 1 : -1;

    const firstStepDirection = this.cell.figure?.colors === Colors.WHITE ? 2 : -2;

    if (
      (target.y === this.cell.y + direction ||
        (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
      target.x === this.cell.x &&
      this.cell.board.getCell(target.y, target.x).isEmpty()
    ) {
      return true;
    }

    if (
      (target.x === this.cell.x + direction || target.x === this.cell.x - direction) &&
      target.y === this.cell.y + direction &&
      !this.cell.board.getCell(target.y, target.x).isEmpty()
    ) {
      return true;
    }
    return false;
  }

  moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
