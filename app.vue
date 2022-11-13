<template>
  <div class="w-screen h-screen flex flex-col gap-2 justify-center items-center">
    <div class="font-bold text-2xl">Ход:{{ objectForCurrentPlayer[currentPlayer?.color] }}</div>
    <BoardComponent :board="board" :current-player="currentPlayer" @swap="swapPlayer" />
  </div>
</template>

<script setup lang="ts">
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';
// let board = new Board();
const board = ref(new Board());
const objectForCurrentPlayer = reactive({
  white: 'Белых',
  black: 'Черных',
});
const whitePlayer = ref<Player>(new Player(Colors.WHITE));
const blackPlayer = ref<Player>(new Player(Colors.BLACK));

const currentPlayer = ref<Player | null>(null);

const swapPlayer = () => {
  currentPlayer.value.color === Colors.WHITE
    ? (currentPlayer.value = blackPlayer.value)
    : (currentPlayer.value = whitePlayer.value);
};
const restart = () => {
  const newBoard = new Board();
  newBoard.initCells();
  newBoard.addFigures();
  currentPlayer.value = whitePlayer.value;
  board.value = newBoard;
};

onMounted(() => {
  restart();
});
</script>
