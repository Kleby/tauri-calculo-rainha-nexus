<script lang="ts">
  import { NevruraService } from "../../services/nevrura.service";
  import Nevrura from "../../components/Nevrura.svelte";
  let inputArea: string = $state("");
  let qtdNevruras = $state(0);
  let nevrurasRecomendadas: { tamanho: number; quantidade: number }[] = $state(
    [],
  );

  function calcularLaje() {
    let lado1Str = inputArea.toLowerCase().split("x")[0].replace(",", ".");
    let lado2Str = inputArea.toLowerCase().split("x")[1].replace(",", ".");

    const nevruraService = new NevruraService(
      parseFloat(lado1Str),
      parseFloat(lado2Str),
    );
    nevrurasRecomendadas = nevruraService.calcularNevrurasRecomendadas();
    qtdNevruras = nevruraService.obterQuantidadeNevruras();
  }
</script>

<div class="laje-container">
  <h2 class="page-title">Cubagem de Laje</h2>
  <div class="">
    <label for="">area</label>
    <input type="text " bind:value={inputArea} />
  </div>
  <div class="action">
    <button type="button" onclick={calcularLaje}>Calcular</button>
  </div>
  <div class="div">
    nevruras Recomendasdas
    {#each nevrurasRecomendadas as { tamanho, quantidade }}
      <p><span>Tamanho: {tamanho}</span><i>|</i>Quantidade: {quantidade}</p>
    {/each}
    <p>
      Total: {qtdNevruras}
    </p>
  </div>
  <Nevrura />
</div>
