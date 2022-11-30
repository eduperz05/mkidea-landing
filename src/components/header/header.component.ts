import { LitElement, html } from "lit";
import "./../login/login.component";
import "./../signup/signup.component";
class HeaderComponent extends LitElement {

  createRenderRoot() {
    return this;
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
        <login-component></login-component>
        <signup-component></signup-component>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);