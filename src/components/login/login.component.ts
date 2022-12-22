import { LitElement, html } from "lit";
export class LoginComponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="">
      <button class="navbar-login-button"><a href="https://app.mkidea.tech/login">Log In</a></button>
    </div>
    `;
  }
}

customElements.define("login-component", LoginComponent);