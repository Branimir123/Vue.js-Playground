<template>
    <div>
        <div> {{ part.title }} </div>
        <div> {{ part.description }} </div>
        <span> {{ part.cost }}</span>
        <img :src="part.src" alt="">
    </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'PartsInfo',
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator: value => Number.isInteger(Number(value)),
    },
  },
  computed: {
    part() {
      const { partType, id } = this;

      return parts[partType].find(part => part.id === +id);
    },
  },
};
</script>

<style>
</style>
