import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureName } from './Figure';
import blackLogo from '../../assets/figures/black-queen.png';
import whiteLogo from '../../assets/figures/white-queen.png';
export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureName.QUEEN;
  }

  canMove(target: Cell): boolean {
    // console.log({
    //   x: target.x,
    //   y: target.y,
    //   available: target.available,
    //   ver: this.cell.isEmptyDiagonal(target),
    // });

    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
