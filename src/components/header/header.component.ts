import { LitElement, html } from "lit";
import "./../login/login.component";
import "./../signup/signup.component";
class HeaderComponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section class="top-nav">
        <div class="logo-container">
          <a href="/"><img src="/img/Logo.png" class="logo" alt="brand-logo"></a>
          <a href="/"><p class="brand-name">MKIDEA</p></a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu">
          <li><a class="nav-item" href="/components/about-us/index.html">About Us</a></li>
          <li><a class="nav-item" href="/components/news/index.html">News</a></li>
          <li><a class="nav-item" href="/components/contact/index.html">Contact</a></li>
          <li class="nav-item ml-[340px]"><login-component></login-component></li>
        </ul>
      </section>
    `;
  }
}

customElements.define("header-component", HeaderComponent);