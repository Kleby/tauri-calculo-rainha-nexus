<script lang="ts">
  import Border from "./Border.svelte";
</script>

<header class="app-header">
  <ul class="link-list">
    <li class="link-item">
      <a href="/" class="link">
        <img
          class="link-image"
          src="/images/icons/arrow-left.png"
          alt="Uma seta para esquerda, é usada para voltara para a tela inicial"
        />
      </a>
    </li>

    <li class="link-item brand-link">
      <a href="/" class="header-brand">
        <img
          class="link-image"
          src="/images/logo/brand.png"
          alt="icone da marca rainha nexus com as cores douradas"
        />
      </a>
    </li>

    <li class="link-item">
      <a href="/" class="link">
        <img
          class="link-image"
          src="/images/icons/arrow-left.png"
          alt="Uma seta para esquerda, é usada para voltara para a tela inicial"
        />
      </a>
    </li>
  </ul>
  <Border filterBlur="bottom" />
</header>

<style>
  .app-header {
    width: 100%;
  }

  .link-list {
    list-style: none;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
  }

  .link-item {
    height: 100%;
    margin: 0 6px;
  }

  .link {
    height: 100%;
  }

  .link-image {
    height: 40px;
  }

  .header-brand,
  .brand-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
  }

  .header-brand img {
    height: 48px;
    object-fit: contain;

    /*filter: drop-shadow(0 0 4px var(--rn-gold-light));*/
  }
</style>
