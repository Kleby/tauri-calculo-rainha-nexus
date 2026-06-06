<script lang="=ts">
  let currentYear = $state(new Date().getFullYear());
</script>

<footer class="app-footer">
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
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #666;
    border-top: 1px solid #e2e8f0;
    margin-top: auto; /* Empurra o footer para o final da tela */
    width: 100%;
  }

  .app-footer p {
    margin: 0;
  }

  .app-footer a {
    color: #ff3e00; /* Cor clássica do Svelte ou use a sua identidade */
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .app-footer a:hover {
    text-decoration: underline;
  }
</style>
