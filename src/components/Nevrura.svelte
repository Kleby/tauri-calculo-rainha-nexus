<script lang="ts">
  // import { onMount } from "svelte";
  import { NevruraService } from "../services/nevrura.service";

  let { ladoMenor, ladoMaior } = $props();

  let nevrurasRecomendadas: {
    tamanho: number;
    quantidade: number;
    desenhos: number;
  }[] = $state([]);

  $effect(() => {
    // const nevruraService = getContext("nevruraServiceContext");
    const nevruraService = new NevruraService(
      parseFloat(ladoMenor),
      parseFloat(ladoMaior),
    );
    nevrurasRecomendadas = nevruraService.calcularNevrurasRecomendadas();
  });
</script>

<div class="nevrura-container">
  <h3 class="nevrura-subtitle font-500">Informações sobre Nevrura</h3>
  <div class="nevrura-description">
    <div class="nevrura-table">
      <i class="table-border"></i>
      <div class="nevrura-table-header">
        <div class="header-items">
          <span class="table-header">Tamanho</span>
          <div class="table-separete">
            <i class="separete"></i>
          </div>
          <span class="table-header item-highlight">Quantidade</span>
        </div>
        {#each nevrurasRecomendadas as { tamanho, quantidade }}
          <i class="table-border"></i>
          <div class="header-items">
            <span class="table-item font-300">{tamanho}m</span>
            <div class="table-separete">
              <i class="separete"></i>
            </div>
            <span class="table-item item-highlight font-300">{quantidade}</span>
          </div>
        {/each}
      </div>
      <i class="table-border"></i>
    </div>
  </div>
  <div class="nevrura-draw-container">
    <span class="nevrura-label menor"> {ladoMenor}m</span>
    <span class="nevrura-label maior"> {ladoMaior}m</span>
    <div class="nevrura-draw-content">
      {#each nevrurasRecomendadas as { tamanho, desenhos }, index}
        {#each Array(desenhos) as d}
          <div
            class="nevrura-draw"
            style="height:  {(tamanho * 238) / ladoMenor}px"
          >
            <span
              class="height"
              style="left: {32 * (index % 2 === 0 ? 1 : -1)}px">{tamanho}m</span
            >
            <span class="draw-separete top"></span><i class="central"></i><span
              class="draw-separete bottom"
            ></span>
          </div>
        {/each}
      {/each}
    </div>
    <!-- <p>{tamanho}</p>
      <p>{quantidade}</p> -->
  </div>
</div>

<style>
  .nevrura-container {
    width: 100%;
    height: 100%;
    padding: 8px;
    border: 1px solid var(--rn-gold);
    background-color: var(--rn-dark-2);
  }
  .nevrura-subtitle {
    color: var(--rn-gold-pale);
  }

  .nevrura-table {
    background-color: var(--rn-dark);
    color: var(--rn-gold-light);
    padding: 12px 16px;
    margin-bottom: 8px;
  }
  .nevrura-container,
  .nevrura-table {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*width: 100%;*/
  }
  .nevrura-description {
    max-width: 320px;
    width: 100%;
  }
  .header-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
    width: 100%;
  }
  .table-header {
    margin: 2px 6px;
    width: 100%;
    font-weight: 600;
  }
  .nevrura-table-header,
  .table-item {
    margin: 2px 6px;
    width: 100%;
    text-align: center;
  }

  .item-highlight {
    color: var(--rn-surface-soft);
  }

  .table-border {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--rn-gold);
  }
  .table-separete {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .separete {
    content: "";
    display: block;
    width: 2px;
    height: 73%;
    background-color: var(--rn-gold);
  }

  .nevrura-draw-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 240px;
    position: relative;
  }
  .nevrura-draw-content {
    width: 100%;
    height: 100%;
    background-color: var(--rn-gold-pale);
    border-radius: 6px;
    border: 4px dotted var(--rn-dark-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .nevrura-label {
    display: block;
    position: absolute;
    font-size: 22px;
    color: var(--rn-white);
  }
  .menor {
    left: -40px;
    transform: rotate(270deg);
  }
  .maior {
    bottom: -40px;
  }

  .nevrura-draw {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 24px;
    background: var(--rn-gray);
    margin: 1px 0;
  }
  .draw-separete {
    position: absolute;
    content: "";
    display: block;
    height: 2px;
    width: 40px;
    background-color: var(--rn-gray);
  }
  .draw-separete.top {
    top: 0;
  }
  .draw-separete.bottom {
    bottom: 0;
  }
  .nevrura-draw .central {
    content: "";
    display: block;
    height: 100%;
    width: 1px;
    background-color: #fff;
  }
  .height {
    position: absolute;
    font-size: 14px;
    color: var(--rn-dark);
  }
</style>
