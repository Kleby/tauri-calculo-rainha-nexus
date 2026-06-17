<script lang="ts">
  import Nevrura from "../../components/Nevrura.svelte";
  let inputArea: string = $state("");
  let onToggleCalcular = $state(false);
  let lados: { ladoMenor: number; ladoMaior: number } = $state({
    ladoMenor: 0,
    ladoMaior: 0,
  });

  // export const nevruraService = writable(new NevruraService());

  function calcularLaje() {
    let lado1 = parseFloat(
      inputArea.toLowerCase().split("x")[0].replace(",", "."),
    );
    let lado2 = parseFloat(
      inputArea.toLowerCase().split("x")[1].replace(",", "."),
    );
    lados =
      lado1 > lado2
        ? { ladoMaior: lado1, ladoMenor: lado2 }
        : { ladoMaior: lado2, ladoMenor: lado1 };

    onClickCalcular(true);
  }

  function onClickCalcular(calculou: boolean) {
    onToggleCalcular = calculou;
  }
</script>

<div class="laje-container">
  <div class="title-content">
    <h2 class="page-title">Calculo de Laje</h2>
    <i class="title-highlight"></i>
  </div>
  <form class="form">
    <div class="form-group">
      <label for="area" class="form-label">*Largura X Comprimento</label>
      <input
        type="text"
        id="area"
        bind:value={inputArea}
        class="form-control"
        placeholder="LxC"
      />
    </div>
    <div class="action">
      <button type="button" onclick={calcularLaje} class="btn btn-primary"
        >Calcular</button
      >
    </div>
  </form>
  {#if onToggleCalcular}
    <Nevrura {...lados} />
  {/if}
</div>

<style>
  .laje-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 200px;
    width: 96%;
    background-color: var(--rn-gold-light);
    border-radius: 22px;
    padding: 16px;
  }
  .title-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
  }
  .page-title {
    font-size: 2rem;
    margin: 0;
    z-index: 1;
  }
  .title-highlight {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--rn-gold-deep);
    box-shadow: 0 2px 8px 4px var(--rn-shadow-color);
    margin-top: -12px;
    z-index: 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--rn-gold-pale);
    padding: 1rem;
    border-radius: 8px;
    box-shadow:
      0 0 6px 2px var(--rn-gold-deep),
      1px 1px 6px 1px #1119 inset;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 12px 16px;
  }
  .form-label {
    color: var(--rn-dark-2);
    font-size: 1.25rem;
    font-weight: 500;
  }
  .form-control {
    border: none;
    outline: none;
    background-color: var(--rn-white);
    font-size: 1.5rem;
    padding: 2px 8px;
    text-align: center;
    color: var(--rn-gold);
    font-weight: 900;
  }
  .form-control::placeholder {
    color: var(--rn-gold);
  }
  .form-control:active {
    background-color: var(--rn-dark);
  }
  .form-control:focus {
    background-color: var(--rn-dark);
    animation: inFocus 1300ms ease-in-out infinite alternate;
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92%;
    margin-top: 16px;
  }
  .btn {
    width: 100%;
    font-size: 1rem;
  }

  @keyframes inFocus {
    0% {
      box-shadow: 0 0 6px 2px #fff;
    }
    100% {
      box-shadow: 0 0 6px 2px #000;
    }
  }
</style>
