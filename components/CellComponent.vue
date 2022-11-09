<template>
  <div
    class="cell"
    :class="cell.color"
  >
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

// console.log(props.selected);
</script>
<style>
.white {
  background-color: rgb(147, 248, 252);
}
.black {
  background-color: rgb(255, 180, 109);
}
</style>
