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
    justify-content: space-between;
    min-height: 100dvh;
    height: 100%;
    background-color: var(--bs-light);
    position: relative;
  }
  .app {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--rn-gold);
  }
</style>
