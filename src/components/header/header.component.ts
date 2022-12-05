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
        <div class="logo-container">
          <a href="/"><img src="img/Logo.png" class="logo" alt="brand-logo"></a>
          <a href="/"><p class="brand-name">MKIDEA</p></a>
        </div>
        <nav class="navbar-navigation">
          <a class="nav-item" href="components/about-us/index.html">About Us</a>
          <a class="nav-item" href="components/news/index.html">News</a>
          <a class="nav-item" href="components/contact/index.html">Contact</a>
        </nav>
        <div class="nav-log-container">
          <login-component></login-component>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);