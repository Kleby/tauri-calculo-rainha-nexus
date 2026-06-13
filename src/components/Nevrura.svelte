<script lang="ts">
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
        <i class="table-border"></i>
        <div class="header-items">
          <span class="table-item font-300">3m</span>
          <div class="table-separete">
            <i class="separete"></i>
          </div>
          <span class="table-item item-highlight font-300">10</span>
        </div>
      </div>
      <i class="table-border"></i>
    </div>
  </div>
  <div class="nevrura-draw-container">
    <span class="nevrura-label menor"> 5m</span>
    <span class="nevrura-label maior"> 8m</span>
    <div class="nevrura-draw-content">
      <i class="nevrura-draw"
        ><span class="draw-separete top"></span><i class="central"></i><span
          class="draw-separete bottom"
        ></span></i
      >
      <i class="nevrura-draw"
        ><span class="draw-separete top"></span><i class="central"></i><span
          class="draw-separete bottom"
        ></span>
      </i>
      <i class="nevrura-draw"
        ><span class="draw-separete top"></span><i class="central"></i><span
          class="draw-separete bottom"
        ></span>
      </i>
    </div>
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
    height: 270px;
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
    position: relative;
    justify-content: center;
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
</style>
