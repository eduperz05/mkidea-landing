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
        <img src="/img/Logo.png" class="logo" alt="">
        <nav class="navbar-navigation">
          <a class="nav-item" href="/components/about-us/index.html">About Us</a>
          <a class="nav-item" href="">Contact</a>
          <a class="nav-item" href="/components/news/index.html">News</a>
        </nav>
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