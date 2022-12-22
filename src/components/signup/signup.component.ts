import { LitElement, html } from "lit";
class SignUpComponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="">
      <button class="btn"><a href="https://app.mkidea.tech/signup">Sign Up</a></button>
    </div>
    `;
  }
}

customElements.define("signup-component", SignUpComponent);