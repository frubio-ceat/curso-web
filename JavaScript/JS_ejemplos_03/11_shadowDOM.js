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
        <h3>Tarjeta 1</h3>
        <p>Subtitulo 1</p>
      </div>
    `;
  }
}

customElements.define("mi-tarjeta", MiTarjeta);