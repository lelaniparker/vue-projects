<template>
  <div>
    <h1>{{ message }}</h1>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
  </div>
</template>

<script>
// cause you're only using the input component inside this component, do not import/export it in the main.js file, rather import/export it directly in this component file
import Input from "./Input"; // importing ObjectName from ComponentFile

export default {
  data() {
    return {
      message: "Learning All About Vue"
    };
  },
  //exporting selectorName: ObjectName
  components: {
    "app-input": Input // now add selector to html template above where you want it to be displayed
  }
};
</script>