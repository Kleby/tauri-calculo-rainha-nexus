<script lang="ts">
</script>

<header class="app-header">
  <div class="header-brand">
    <img src="/images/logo/brand.png" alt="" />
  </div>
</header>

<style>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background-color: #1e1e24; /* Base escura do tema */
    background-color: var(--bs-light);

    /* Detalhe Synthwave: linha inferior com brilho neon sutil (Cyan/Pink) */
    border-bottom: 2px solid #d8921639;
    box-shadow: 0 1px 6px #d892163a;
  }

  .header-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Espaço caso você decida colocar um texto ao lado da logo depois */
  }

  .header-brand img {
    height: 40px;
    object-fit: contain;

    /* Efeito opcional: deixa a logo com um leve Filtro/Brilho Synthwave */
    filter: drop-shadow(0 0 4px var(--rn-gold-light));
  }
</style>
