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
    inputArea = inputArea.replace(/[^\d.,]+/gi, "x");
    if (isValid(inputArea)) {
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
    }

    console.log(isValid(inputArea));
    onClickCalcular(true && isValid(inputArea));
    inputArea = "";
  }

  function isValid(inputArea: string): boolean {
    if (!inputArea) return false;
    if (!/x/i.test(inputArea)) return false;
    return (
      /[\d.,]+$/i.test(inputArea.split("x")[0]) ||
      /[\d.,]+$/i.test(inputArea.split("x")[0])
    );
  }

  function onClickCalcular(isValid: boolean) {
    onToggleCalcular = isValid;
  }
</script>

<div class="laje-container">
  <div class="title-content">
    <div>
      <h2 class="page-title">Calculo de Laje</h2>
      <i class="title-highlight"></i>
    </div>
    <div class="description-content">
      <p>Informe á ÀREA para calcular os matérias que serão usados em laje</p>
    </div>
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
        onkeydown={(event) => {
          if (event.key === "Enter") {
            calcularLaje();
          }
        }}
      />
      <div
        class="invalid"
        style={"visible: " + isValid(inputArea) ? "visible" : "hidden"}
      >
        <small class="danger">
          Dados inseridos Iválidos! Tente "Largura X Altura"
        </small>
      </div>
    </div>
    <div class="action">
      <button type="button" onclick={calcularLaje} class="btn btn-primary"
        >Calcular</button
      >
    </div>
  </form>
</div>
{#if onToggleCalcular}
  <dialog class="modal">
    <div class="modal-content">
      <div class="modal-result">
        <div class="modal-table">
          <div class="row-group">
            <p class="row">Bloco ----:</p>
            <p class="row">Malha ----:</p>
            <p class="row">Brita -----:</p>
            <p class="row">Cimento --:</p>
          </div>
          <div class="row-group">
            <p class="row">230 un de Cerâmica | 40un de Isopor</p>
            <p class="row">4un de Malhas</p>
            <p class="row">16 latas</p>
            <p class="row">8 sacos</p>
          </div>
        </div>
      </div>
      <i class="line-v"></i>
      <Nevrura {...lados} />
      <div class="modal-action">
        <button
          type="button"
          class="btn btn-rn-soft-outline"
          onclick={() => onClickCalcular(false)}
        >
          X
        </button>
      </div>
    </div>
  </dialog>
{/if}

<style>
  .laje-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    margin: 1.5rem 0 2rem 0;
  }
  .page-title {
    font-size: 2rem;
    margin: 0;
    z-index: 1;
    color: var(--bs-light);
  }
  .title-highlight {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: #f8b6768a;
    box-shadow: 0 1px 10px 3px #3348;
    margin-top: -10px;
    z-index: 0;
  }

  .description-content {
    margin-top: 1rem;
    color: var(--rn-dark-2);
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
    margin-bottom: 2rem;
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

  .modal {
    height: 100%;
    top: 0;
    background: #4242429f;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    border: 0;
    padding: 0;
  }

  .modal-content {
    padding: 2.5rem;
    border-radius: 2rem;
    display: grid;
    grid-template-columns: 4fr 0.5fr 4fr 0.5fr;
    justify-items: center;
    align-items: center;
    background-color: var(--rn-dark-2);
    color: var(--rn-gold-light);
    position: relative;
  }

  .modal-action {
    position: absolute;
    /*width: 96%;*/
    right: 2rem;
    top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .modal-table {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    color: var(--rn-gold);
  }

  .row-group {
    /*color: var(--rn-gold-pale);*/
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .line-v {
    height: 100%;
    width: 2px;
    background-color: var(--rn-gold-deep);
    display: block;
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
