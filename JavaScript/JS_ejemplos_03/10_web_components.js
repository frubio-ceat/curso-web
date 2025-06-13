class MiComponente extends HTMLElement {
  // Este método se llama cuando el componente se añade al DOM
  connectedCallback() {
    this.innerHTML = "<p>Hola desde el componente</p>";
  }
}
customElements.define("mi-componente", MiComponente);