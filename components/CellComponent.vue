<template>
  <div
    class="cell transition-all"
    :class="[
      cell.color,
      selected ? ' [background-color:_red_!important]' : '',
      cell.available ? ' [background-color:_green_!important]' : '',
    ]"
    @click="click(cell)"
  >
    <div
      v-if="!cell.figure && cell.available"
      :class="['available']"
    ></div>
    <img
      v-if="cell?.figure?.logo"
      class="w-9"
      :src="cell?.figure?.logo"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { Cell } from '~/models/Cell';

interface Props {
  cell: Cell;
  selected: boolean;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  (e: 'clickCell', cell: Cell): void;
}>();

const click = (event: Cell) => {
  emits('clickCell', event);
};
</script>
<style>
.white {
  background-color: rgb(147, 248, 252);
}
.black {
  background-color: rgb(255, 180, 109);
}
</style>
