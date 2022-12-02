import { LitElement, html } from "lit";

class FooterComponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <footer id="footer" class="footer">
      <div class="footer-section-container">
        <h4 class="section-title-white">Contact</h4>
        <ul>
          <li><a href="#">Phone Number</a></li>
          <li><a href="#">Email</a></li>
        </ul>
      </div>
      <div class="footer-section-container">
        <h4 class="section-title-white">Social Media</h4>
        <div class="media-icons-container">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div class="footer-section-container">
        <h4 class="section-title-white">More Information</h4>
        <ul>
          <li><a href="#">How it works</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
    </footer>
     `;
  }
}

customElements.define("footer-component", FooterComponent);