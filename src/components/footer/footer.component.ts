import { LitElement, html } from "lit";

class FooterComponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <footer id="footer" class="footer">
      <div class="footer-section-container">
        <h4 class="section-title-white max-sm:text-[15px]">Contact</h4>
        <ul>
          <li><a href="/components/contact/index.html" class="footer-link">Phone Number</a></li>
          <li><a href="/components/contact/index.html" class="footer-link">Email</a></li>
          <li><a href="/components/contact/index.html" class="footer-link">Get Support</a></li>
        </ul>
      </div>
      <div class="footer-section-container">
        <h4 class="section-title-white max-sm:text-[15px]">Social Media</h4>
        <div class="media-icons-container">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div class="footer-section-container">
        <h4 class="section-title-white max-sm:text-[15px]">More</h4>
        <ul>
          <li><a href="/components/about-us/index.html" class="footer-link">About Us</a></li>
          <li><a href="/components/news/index.html" class="footer-link">News</a></li>
        </ul>
      </div>
    </footer>
     `;
  }
}

customElements.define("footer-component", FooterComponent);