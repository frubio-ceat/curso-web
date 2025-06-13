class MiTarjeta extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        .tarjeta {
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 6px;
          background: #f9f9f9;
          font-family: sans-serif;
          max-width: 300px;
        }
      </style>
      <div class="tarjeta">
        <slot name="titulo"><h3>Sin Título</h3></slot>
        <slot name="contenido"><p>Contenido por defecto</p></slot>
      </div>
    `;
  }
}

customElements.define("mi-tarjeta", MiTarjeta);