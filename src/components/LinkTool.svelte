<script lang="ts">
  import { goto } from "$app/navigation";

  let { routerLink, imgSrc, imgAlt, linkLabel } = $props();
</script>

<li class="link-item font-500">
  <button
    type="button"
    id={linkLabel}
    class="link-content"
    onclick={() => {
      goto(routerLink);
    }}
  >
    <img src={imgSrc} alt={imgAlt} class="link-icon" />
  </button>
  <label for={linkLabel} class="link-label"
    >{linkLabel}
    <span class="icon-border"></span>
  </label>
</li>

<style>
  .link-item,
  .link-content,
  .link-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .link-item,
  .link-content {
    padding: 12px;
  }

  .link-label {
    text-transform: uppercase;
    color: var(--rn-dark-2);
    margin-top: 8px;
    /*border-bottom: 1px solid var(--rn-gold);*/
  }

  .link-content {
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 22%;
    background: radial-gradient(
      var(--rn-gold-soft) 50%,
      var(--rn-gold) 88%,
      var(--rn-gold-deep) 96%
    );
    transition: 300ms;
  }

  .link-content:hover {
    /*background: radial-gradient(var(--bs-primary), var(--rn-surface));*/
    background: radial-gradient(
      var(--rn-gold-pale) 37%,
      var(--rn-gold-soft) 83%,
      var(--rn-gold) 96%
    );
    /*border: 1px solid var(--rn-gold);*/
    box-shadow:
      0 0 8px 1px var(--rn-shadow-gold-color) inset,
      0 0 6px 1px var(--bs-dark);
  }

  .link-icon {
    width: 80px;
    height: 64px;
  }

  .icon-border {
    content: "";
    display: flex;

    width: 0;
    height: 2px;
    background: var(--rn-gold);
    filter: blur(1px);
    transition: width 300ms ease-in-out;
  }
  .link-item:hover .link-label .icon-border {
    width: 100%;
  }
</style>
