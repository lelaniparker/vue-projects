<template>
  <div>
    <button v-on:click="on = !on">On/ Off</button>
    <p v-if="on">This button is on</p>
    <p v-else>This button is off</p>
  </div>
</template>

<script>
// need script as using directive inside html template (therefore need to export it)
export default {
  data() {
    return {
      on: true
    };
  }
};
</script>