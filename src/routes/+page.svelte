<script lang="ts">
  import Links from "../components/Links.svelte";
</script>

<div class="home-container font-400">
  <div class="home-info">
    <h1 class="home-title font-600">Calculador de Materiais</h1>
    <p class="home-description">
      Utilize nossa ferramente para auxiliar nos calculos de materias de
      construção para orçamentos
    </p>
  </div>
  <Links />
  <div class="history-container">
    <div class="hitory-title-content">
      <h2>Historíco</h2>
      <p class="subtitle">Consulte o historíco de cálculos</p>
    </div>
    <div class="history-content">
      <a href="history">
        <img
          width="60px"
          src="/images/icons/arrow-left.png"
          alt="Icone do historico"
          title="ir para o historico"
        />
      </a>
    </div>
  </div>
</div>

<style>
  .home-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--rn-gold-soft);
    color: var(--rn-white);
  }

  .home-info,
  .history-container,
  .history-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .home-title {
    color: var(--rn-dark-2);
  }
  .home-description {
    color: var(--rn-dark);
  }

  .history-container {
    height: 100%;
    background-color: var(--rn-gold-soft);
    justify-content: space-between;
    height: 50%;
  }

  .history-content {
    width: 100%;
    height: 50%;
    background-color: var(--rn-gold);
  }
</style>
