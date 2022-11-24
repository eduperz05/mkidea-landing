

import { LitElement, html } from "lit";

class BaseElement extends LitElement {
  createRenderRoot() {
    return this;
  }
  
  render() {
    return html`<div class="red">Ejemplo</div>`;
  }
}

customElements.define("base-element", BaseElement);