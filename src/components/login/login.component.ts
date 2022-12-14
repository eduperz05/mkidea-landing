import { LitElement, html } from "lit";
import "tw-elements";
export class LoginComponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  closeModal() {            
    const login = document.querySelector("#exampleModalCenter");
    const modalBackdrop = document.querySelector(".modal-backdrop");
    const body = document.querySelector("body");
    if (login) {
      body?.classList.remove("modal-open");
      login?.classList.add("invisible");
    } else {
      body?.classList.add("modal-open");
      login?.classList.remove("invisible");
    }
    if (modalBackdrop) {
      modalBackdrop?.remove();
    }
  }

  render() {
    return html`
    <div class="">
      <button class="navbar-login-button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Log In</button>
    </div>
    <div class="modal-container fade overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
      <div class="modal-dialog dialog-container">
        <div class="dialog-content">
          <div class="image-container">
            <img class="logo" src="/img/Logo.png" alt="Page Logo">
          </div>
          <div class="login-content">
            <h3 class="login-title">Login</h3>
            <label for="username" class="username-text">Username*</label>
            <div class="username-container">
              <input type="text" id="username" name="username" placeholder="Enter your Username">
              <img class="user icon" src="/img/user-icon.svg">
            </div>
            <label for="password" class="password-text">Password*</label>
            <div class="password-container">
              <input type="password" id="password" name="password" placeholder="Enter your Password">
              <img class="password icon" src="/img/password-icon.svg">
            </div>
          </div>
          <div class="forgot-password">
            <a href="">Forgot Password?</a>
          </div>
          <div class="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me">
            <label for="remember-me">Remember Me</label>
          </div>
          <div class="login-button-container">
            <button class="login-button btn">Log In</button>
          </div>
          <div class="log-in-options">
            <span class="line"></span>
            <p>or Log in with</p>
            <span class="line"></span>
          </div>
          <div class="social-media">
            <a href=""><img src="/img/github-icon.svg" width=28 height=28></a>
            <a href=""><img src="/img/linkedin-icon.svg" width=28 height=28></a>
            <a href=""><img src="/img/google-icon.svg" width=28 height=28></a>
          </div>
          <div class="sign-up-option">
          <p>Don't have an account?</p>
          <a href="" class="sign-up-link" data-bs-toggle="modal" data-bs-target="#ModalCenter" @click=${this.closeModal}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("login-component", LoginComponent);