<template>
  <div class="board">
    <div
      v-for="(cell, index) in board.cells"
      :key="index"
    >
      <div v-for="row in cell">
        <CellComponent
          @clickCell="clickCell"
          :cell="row"
          :selected="row.x === selectedCell?.x && row.y === selectedCell?.y"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Cell } from '~/models/Cell';
import { Board } from '../models/Board';
const props = defineProps({
  board: {
    type: Board,
  },
});

const selectedCell = ref<Cell | null>(null);

const clickCell = (event: Cell) => {
  if (
    selectedCell.value &&
    selectedCell.value !== event &&
    selectedCell.value.figure?.canMove(event)
  ) {
    selectedCell.value.moveFigure(event);
    selectedCell.value = null;
  } else {
    selectedCell.value = event;
  }
};

const highlightCells = (selectedCell: Cell) => {
  props.board.highlightCells(selectedCell);
};

watch(
  () => selectedCell.value,
  (nv: Cell) => {
    highlightCells(nv);
  },
);
</script>
