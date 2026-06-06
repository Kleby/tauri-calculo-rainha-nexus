<script lang="ts">
  import Header from "../templates/Header.svelte";
  import Footer from "../templates/Footer.svelte";
  let { children } = $props();
  let currentYear = $state(new Date().getFullYear());
</script>

<div class="app-layout">
  <Header />
  <main class="app">
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  .app-layout {
    display: flex;
    flex-direction: column;
    /*min-height: 100vh;*/
    height: 100dvh;
    font-family: sans-serif;
  }
  .app {
    height: 100%;
    background-color: var(--bs-primary);
  }
</style>
