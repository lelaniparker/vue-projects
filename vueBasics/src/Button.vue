<template>
  <div>
    <button v-on:click="on = !on">On/ Off</button>
    <p v-if="on">This button is on</p>
    <p v-else>This button is off</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      on: true
    };
  }
};
</script>