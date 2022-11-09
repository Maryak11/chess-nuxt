<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <BoardComponent :board="board" />
  </div>
</template>

<script setup>
import { Board } from './models/Board';
// let board = new Board();
const board = ref(new Board());

// board.value.initCells();

// nv.initCells();
// console.log(board);
// board = nv;

const restart = () => {
  const newBoard = new Board();
  newBoard.initCells();
  newBoard.addFigures();
  board.value = newBoard;
  // console.log({ bb: board.value });
};

onMounted(() => {
  restart();
});
</script>
