import { LitElement, html } from "lit";
import "tw-elements";
class SignUpComponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="">
      <button class="btn" data-bs-toggle="modal" data-bs-target="#ModalCenter">Sign Up</button>
    </div>
    <div class="modal-container fade overflow-x-hidden overflow-y-auto" id="ModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
      <div class="modal-dialog dialog-container">
        <div class="dialog-content">
          <div class="image-container">
            <img class="logo" src="/img/Logo.png" alt="Page Logo">
          </div>
          <div class="signup-content">
            <h3 class="signup-title">Sign Up</h3>
            <label for="username" class="username-text">Username*</label>
            <div class="username-container">
              <input type="text" id="username" name="username" placeholder="Enter your Username">
              <img class="user icon" src="/img/user-icon.svg">
            </div>
            <label for="email" class="email-text">Email*</label>
            <div class="email-container">
              <input type="email" id="email" name="email" placeholder="name@email.com">
              <img class="user icon" src="/img/email-icon.svg">
            </div>
            <label for="password" class="password-text">Password*</label>
            <div class="password-container">
              <input type="password" id="password" name="password" placeholder="Enter your Password">
              <img class="password icon" src="/img/password-icon.svg">
            </div>
          </div>
          <div class="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me">
            <label for="remember-me">Remember Me</label>
          </div>
          <div class="signup-button-container">
            <button class="signup-button btn">Sign Up</button>
          </div>
          <div class="sign-up-options">
            <span class="line"></span>
            <p>or Sign Up with</p>            
            <span class="line"></span>
          </div>
          <div class="social-media">
            <a href=""><img src="/img/github-icon.svg" width=28 height=28></a>
            <a href=""><img src="/img/linkedin-icon.svg" width=28 height=28></a>
            <a href=""><img src="/img/google-icon.svg" width=28 height=28></a>
          </div>
          <div class="log-in-option">
          <p>Already have an account?</p>
          <a href="" class="log-in-link">Log In</a>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("signup-component", SignUpComponent);