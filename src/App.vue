<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import { NavBar } from "@/components/NavBar";
import { Post } from "@/components/Post";

export default {
  components: {
    NavBar,
  },
}
</script>
