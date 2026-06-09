<script lang="ts">
  let { filterBlur } = $props();
</script>

<div class="border">
  <i class:line-shadow={filterBlur === "top"} class="border-line"></i>
  <span class="pipe"></span>
  <span class="pipe"></span>
  <i class:line-shadow={filterBlur === "bottom"} class="border-line"></i>
</div>

<style>
  .border {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .border-line {
    background-color: var(--rn-shadow-gold-color);
    display: block;
    content: "";
    height: 1px;
    width: 100%;
  }

  .line-shadow {
    background-color: rgba(193, 165, 0, 0.75);
    filter: blur(1px);
    height: 1px;
  }
</style>
