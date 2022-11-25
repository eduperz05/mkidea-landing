import { LitElement, html } from "lit";
import "tw-elements";
class LoginComponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="">
      <button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Log In</button>
    </div>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div class="image-container">
            <img src="/img/Logo.png" alt="Page Logo" width=50 height=50>
          </div>
          <div class="login-content">
            <h3>Login</h3>
            <label for="username">Username*</label>
            <input type="text" id="username" name="username" placeholder="Enter your Username">
            <label for="password">Password*</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password">
          </div>
          <div class="forgot-password">
            <a href="">Forgot Password?</a>
          </div>
          <div class="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me">
            <label for="remember-me">Remember Me</label><br>
          </div>
          <div class="login-button-container">
            <button class="login-button btn">Log In</button>
          </div>
          <div class="sign-in-options">
            
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("login-component", LoginComponent);