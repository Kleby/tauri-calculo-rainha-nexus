<script lang="=ts">
  let currentYear = $state(new Date().getFullYear());
</script>

<footer class="app-footer font-100">
  <p>
    &copy; {currentYear} Cubagem. Desenvolvido com Tauri & Svelte 5.
  </p>
  <p>
    Developed by
    <a
      href="https://www.linkedin.com/in/jkleby/"
      target="_blank"
      rel="noopener noreferrer"
    >
      João Kleby
    </a>
  </p>
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
    margin-top: auto; /* Empurra o footer para o final da tela */
    width: 100%;
  }

  .app-footer p {
    margin: 0;
  }

  .app-footer a {
    color: var(--rn-gold); /* Cor clássica do Svelte ou use a sua identidade */
    text-decoration: none;
    font-weight: 500;
    transition: 0.2s ease-in;
  }

  .app-footer a:hover {
    text-decoration: underline;
    color: var(--rn-gold-soft);
    font-weight: 600;
  }
  /*--rn-gold-soft: #f2c94c;
  --rn-gold-pale: #fff4d6;
  --rn-gold-deep: #b9770e;*/
</style>
