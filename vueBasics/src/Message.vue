<template>
  <div>
    <h1>Learning All About Vue</h1>
    <app-input></app-input>
  </div>
</template>

<script>
import Input from "./Input"; // Need to import file to use their components

export default {
  //Use components here when only using it in 1 file (else import/export into Main file)
  components: {
    "app-input": Input // selector: object imported (then add selector to template above)
  }
};
</script>