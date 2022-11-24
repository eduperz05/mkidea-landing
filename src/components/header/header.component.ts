import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element";

import style from "./header.component.scss";

@customElement("header-component")
class HeaderComponent extends TailwindElement(style) {

  @property()
    name?: string = "World";

  render() {
    return html`<div class="red">Ejemplo 2</div>`;
  }

  createRenderRoot() { 
    return this;  
  }
}

customElements.define("header-component", HeaderComponent);
// <div class="bg-gray-200"> 
//   <p>Hello, <b>${this.name}</b> !</p>
//   <button class="bg-blue-200 text-yellow-200 p-2 rounded-full text-2xl">Hello world!</button>
// </div>