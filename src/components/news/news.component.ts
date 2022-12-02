import { LitElement, html } from "lit";

class NewsComponent extends LitElement {

  createRenderRoot(){
    return this;
  }

  render() {
    return html`
    <header-component></header-component>
    <div class="news-container">
        <div class="news-header">
            <div class="headset-container">
                <img src="img/headset.png" class="headset-image" alt="news-image"/>
            </div>
            <h3 class="news-title">DEVS NEWS</h3>
        </div>
        <div class="news-header-buttons">
            <button class="btn">All</button>
            <button class="btn">Last Week</button>
        </div>
        <div class="featured-news">
            <div class="news-image-container">
                <img src="img/elon-musk.jpg" class="elon-image" alt="news-image"/>
            </div>
            <div class="featured-news-text">
                <h3 class="featured-title">ELON MUSK BUYS TWITTER</h3>
                <p class="featured-text">Elon Musk was recently bored... So he bought twitter. 
                <br>What happened will suprise you...</br></p>
            </div>
        </div>
        <div class="news-section">
            <div class="news-report">
                <div class="report-image-container">
                    <img src="img/news-1.jpg" class="report-image" alt="report-image" />
                </div>
                <div class="report-text">
                    <h4 class="featured-title">NEW TOOLS</h4>
                    <p>Recently there are some new tools that might help you in the long term</p>
                </div>
            </div>
            <div class="news-report">
                <div class="report-image-container">
                    <img src="img/news-2.jpg" class="report-image" alt="report-image" />
                </div>
                <div class="report-text">
                    <h4 class="featured-title">MAGIC TIPS</h4>
                    <p>That will improve your programming skills to new levels</p>
                </div>
            </div>
            <div class="news-report">
                <div class="report-image-container">
                    <img src="img/news-3.jpg" class="report-image" alt="report-image" />
                </div>
                <div class="report-text">
                    <h4 class="featured-title">PROJECT NEWS</h4>
                    <p>We made a new way to plan your group project so you can be faster</p>
                </div>
            </div>
            <div class="news-report">
                <div class="report-image-container">
                    <img src="img/news-4.jpg" class="report-image" alt="report-image" />
                </div>
                <div class="report-text">
                    <h4 class="featured-title">LEARN TO CODE IN 5 SECONDS</h4>
                    <p>1 Hour might be too much for you, so we thought of teaching you in 5 seconds</p>
                </div>
            </div>
            <div class="news-report">
                <div class="report-image-container">
                    <img src="img/news-5.jpg" class="report-image" alt="report-image" />
                </div>
                <div class="report-text">
                    <h4 class="featured-title">MASTODON IS GOD</h4>
                    <p>And like god, is already dead. Yeah, you will be surprised why</p>
                </div>
                </div>
                <div class="news-report">
                <div class="report-image-container">
                    <img src="img/news-6.jpg" class="report-image" alt="report-image" />
                </div>
                <div class="report-text">
                    <h4 class="featured-title">CAREFUL, NEW KIND VIRUS</h4>
                    <p>It seems like there's a new virus that can destroy your computer, and...</p>
                </div>
            </div>
        </div>
    </div>
    <footer-component></footer-component>  
    `;
  }
}

customElements.define("news-component", NewsComponent);