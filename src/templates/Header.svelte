<script lang="ts">
  import Border from "./Border.svelte";
</script>

<header class="app-header">
  <div class="header-content">
    <div class="header-brand">
      <img src="/images/logo/brand.png" alt="" />
    </div>
  </div>
  <Border filterBlur="bottom" />
</header>

<style>
  .app-header {
    width: 100%;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
  }

  .header-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .header-brand img {
    height: 40px;
    object-fit: contain;

    /*filter: drop-shadow(0 0 4px var(--rn-gold-light));*/
  }
</style>
