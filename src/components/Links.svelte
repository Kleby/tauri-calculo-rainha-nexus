<script lang="ts">
  import Border from "../templates/Border.svelte";
  import LinkTool from "./LinkTool.svelte";
  const links = [
    {
      routerLink: "/Laje",
      imgSrc: "/images/icons/laje.png",
      imgAlt: "Icone de uma Laje",
      linkLabel: "laje",
    },
    {
      routerLink: "/PVC",
      imgSrc: "/images/icons/placa_pvc.png",
      imgAlt: "Icone de uma Placa PVC",
      linkLabel: "pvc",
    },
    {
      routerLink: "/Madeira",
      imgSrc: "/images/icons/ripa.png",
      imgAlt: "Icone de uma Madeira",
      linkLabel: "madeira",
    },
    {
      routerLink: "/Telha",
      imgSrc: "/images/icons/telha.png",
      imgAlt: "Icone de uma Telha",
      linkLabel: "telha",
    },
    {
      routerLink: "/Ceramica",
      imgSrc: "/images/icons/ceramica_verde.png",
      imgAlt: "Icone de uma Cerâmica",
      linkLabel: "ceramica",
    },
  ];
</script>

<div class="links-container">
  <Border filterBlur="bottom" />
  <div class="link-tool-container">
    <ul class="link-list">
      {#each links as { routerLink, imgSrc, imgAlt, linkLabel }}
        <LinkTool {routerLink} {imgSrc} {imgAlt} {linkLabel} />
      {/each}
    </ul>
  </div>
  <Border filterBlur="bottom" />
</div>

<style>
  .links-container,
  .link-tool-container,
  .link-list {
    background-color: var(--rn-gold-pale);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "inter-medium";
  }

  .links-container {
    flex-direction: column;
  }

  .link-tool-container {
    margin: 0.25rem 1rem;
  }

  .link-list {
    list-style: none;
    width: 100%;
    padding: 0;
  }
</style>
