import { LitElement, html } from "lit";
import "./../login/login.component";

class HeaderComponent extends LitElement {

  
  createRenderRoot() {
    return this;
  }

  registerDialog() {
    return html`<login-component></login-component>`;
  }

  render() {
    return html`
    <header id="header" class="header">
      <nav class="header-navbar">
        <img src="img/Logo.png" width="60" alt="">
        <section class="navbar-navigation">
          <a class="nav-item" href="">About Us</a>
          <a class="nav-item" href="">Contact</a>
          <a class="nav-item" href="">How it works</a>
        </section>
        <div class="nav-log-container">
          <a class="btn" @click=${this.registerDialog} href="">Log In</a>
          <a class="btn" href="">Sign Up</a>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);