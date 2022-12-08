import { LitElement, html } from "lit";

class AboutComponent extends LitElement {

  createRenderRoot(){
    return this;
  }

  render() {
    return html`
    <header-component></header-component>
    <div class="about-container">
        <div class="about-header">
            <h3>We are MKIDEA Team</h3>
            <p>Mkidea is a Spanish company created by 6 Junior Developers with the purpose of
            <br>helping developers and product owners to build projects together</br>
            <br>in a much faster, organised and easier way.</br></p>
            <img src="img/" alt="about-image"/>
        </div>
        <div class="about-mission">
            <h4>Our mission</h4>
            <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
              ></button>
              <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              ></button>
              <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                class="block w-full"
                  alt="..."
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
              <div class="carousel-item relative float-left w-full">
                <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                class="block w-full"
                  alt="..."
                />
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                class="block w-full"
                  alt="..."
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
              >
              <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            >
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="leadership-team">
          <h3>Leadership Team</h3>
          <div class="member-card">
            <img src="" alt="member-image">
            <p>Romer Álvarez</p>
          </div>
          <div class="member-card">
            <img src="" alt="member-image">
            <p>Jose Corzo</p>
          </div>
          <div class="member-card">
            <img src="" alt="member-image">
            <p>Judith Domínguez</p>
          </div>
          <div class="member-card">
            <img src="" alt="member-image">
            <p>Bryan Juela</p>
          </div>
          <div class="member-card">
            <img src="" alt="member-image">
            <p>Eduardo Pérez</p>
          </div>
          <div class="member-card">
            <img src="" alt="member-image">
            <p>Ian Río</p>
          </div>
        </div>

    </div>  
    `;
  }
}

customElements.define("about-component",AboutComponent);