<script lang="=ts">
  import Border from "./Border.svelte";
  let currentYear = $state(new Date().getFullYear());
</script>

<footer>
  <Border filterBlur="top" />
  <div class="app-footer font-300">
    <p>
      &copy; {currentYear}
      <span class="brand-name-first font-600"> Rainha</span>
      <span class="brand-name-last font-600">Nexus</span>
    </p>
    <p>
      Desenvolvido por
      <a
        href="https://www.linkedin.com/in/jkleby/"
        target="_blank"
        rel="noopener noreferrer"
        class="font-600"
      >
        João Kleby
      </a>
    </p>
  </div>
</footer>

<style>
  .app-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1.6rem;
    padding-top: 1rem;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: var(--rn-dark-2);
    border-top: 1px solid var(--rn-shadow-soft);
    width: 100%;
  }

  .app-footer p {
    margin: 0;
  }

  .app-footer a {
    text-decoration: none;
    transition: 0.2s ease-in;
    font-family: "font-600";
    color: var(--rn-gold-light);
  }

  .app-footer a:hover {
    text-decoration: underline;
    color: var(
      --rn-gold-deep
    ); /* Cor clássica do Svelte ou use a sua identidade */
  }
  .brand-name-first {
    color: var(--rn-gold);
  }

  .brand-name-last {
    color: var(--rn-dark-3);
  }
  /*--rn-gold-soft: #f2c94c;
  --rn-gold-pale: #fff4d6;
  --rn-gold-deep: #b9770e;*/
</style>
