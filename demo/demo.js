import { LitElement, html, css, customElement } from "../web_modules/lit-element.js";
import { classMap } from '../web_modules/lit-html/directives/class-map.js';

export class MainApplication extends LitElement {
  static styles = css`
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: var(--flex-layout);
    }

    .fullview-container {
      height: 100%;
      width: 100%;
      backdrop-filter: blur(5px) contrast(.8);
      -webkit-backdrop-filter: blur(5px) contrast(.8);
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .fullview-container.hidden {
      display: none;
    }

    .arrow-left {
      width: 30px;
      height: 30px;
      border-bottom: solid 10px white;
      border-left: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    .arrow-right {
      width: 30px;
      height: 30px;
      border-top: solid 10px white;
      border-right: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    #full-img {
      height: 95%;
      width: 85%;
      object-fit: contain;
      user-select: none;
    }

    .detail-img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    .loading-img {
      height: 50px;
      display: none;
    }

    .loading-img.visible {
      display: block;
    }

    .loading {
      min-height: 70%;
      height: 70%;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 32px;
      height: 32px;
      opacity: 0.3;
      background-color: white;
    }

    .close:hover {
      opacity: 1;
    }

    .close:before, .close:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #333;
    }

    .close:before {
      transform: rotate(45deg);
    }

    .close:after {
      transform: rotate(-45deg);
    }

    .gallery {
      width: var(--span-1-width, 100vw);
      height: var(--span-1-height, 100vh);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-template-rows: repeat(auto-fit, 1fr);
      grid-gap: 2px;
      background-color: black;
      grid-auto-flow: dense;
      overflow-y: scroll;
      scrollbar-width: thin;
      --scrollbar-background: #dfdfdf;
      --scrollbar-thumb: #84898b;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      .gallery {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }
    }

    .gallery::-webkit-scrollbar {
      width: 11px;
    }
    .gallery {
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-background);
    }
    .gallery::-webkit-scrollbar-track {
      background: var(--scrollbar-background);
    }
    .gallery::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-thumb) ;
      border-radius: 10px;
      border: 3px solid var(--scrollbar-background);
    }

    .detail-container {
      height: var(--span-2-height, 0vh);
      width: var(--span-2-width, 0vw);
      background-color: black;
      color: white;
    }

    .fold {
      height: var(--fold-height, 0);
      width: var(--fold-width, 0);
      background: repeating-linear-gradient(
        -55deg,
        #242424,
        #242424 10px,
        #f4cb16d5 10px,
        #f4cb16d5 20px
      );
    }

    .detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      visibility: hidden;
    }

    #detail-text {
      color: white;
      font-size: 1.5em;
      word-wrap: break-word;
      text-align: center;
      height: 20%;
      margin-top: 15px;
    }

    #detail-text-about {
      color: white;
      font-size: 2em;
      margin-top: 10px;
      margin-bottom: 10px;
      height: 10%;
    }

    .detail-select {
      color: white;
      font-size: 2em;
      text-align: center;
      margin-top : 20px;
    }

    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* This rule doesn't work with the polyfill */
    @media (spanning: single-fold-vertical) {
      .gallery {
        background-color: red;
      }
    }
  `;

  static get properties() { return {
    _full_view_container_classes: { type: String },
    _loading_classes: { type: String }
  };}

  _full_img;
  _detail_img;
  _detail_container;
  _loading_img;
  _detail;
  _detail_select;

  firstUpdated() {
    this._full_img = this.shadowRoot.querySelector('#full-img');
    this._detail_img = this.shadowRoot.querySelector('.detail-img');
    this._detail_container = this.shadowRoot.querySelector('.detail-container');
    this._loading_img = this.shadowRoot.querySelector('.loading-img');
    this._detail = this.shadowRoot.querySelector('.detail');
    this._detail_select = this.shadowRoot.querySelector('.detail-select');
    this._detail_text = this.shadowRoot.querySelector('#detail-text');
  }

  constructor() {
    super();
    this._full_view_container_classes = { hidden : true };
    this._loading_classes = { visible : false };
  }

  _openPicture (e) {
    let source_image = e.currentTarget.children[1].currentSrc;
    let path = source_image.replace('-l', '');
    if (window.getComputedStyle(this._detail_container).width != '0px') {
      this._loading_classes = { visible : true };
      this._detail_img.setAttribute('src', '');
      this._detail_img.setAttribute('data-src', path);
      this._detail_img.style.visibility = 'hidden';
      this._detail_select.style.display = 'none';
      this._detail.style.visibility = 'visible';
      this._detail_text.innerHTML = e.currentTarget.children[1].alt;
      this._loadImage();
    } else {
      this._full_view_container_classes = { hidden: false };
      this._full_img.setAttribute('src', path);
      this._current_image = e.currentTarget;
    }
  }

  _loadImage() {
    this._observer = new IntersectionObserver(this._onIntersection);
    this._observer.observe(this._detail_img);
  }

  _onIntersection = async (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (this.observer) {
           this.observer.disconnect();
        }
        if (entry.target.getAttribute('data-src')) {
          entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
          entry.target.removeAttribute('data-src');
          this._loading_classes = { visible : false };
          this._detail_img.style.visibility = 'visible';
        }
      }
    }
  }

  _closePicture () {
    this._full_view_container_classes = { hidden: true };
  }

  _previousPicture (event) {
    event.stopPropagation();
    if (this._current_image.parentNode.previousElementSibling) {
      let previous_node_image = this._current_image.parentNode.previousElementSibling.children[0];
      let previous_image = previous_node_image.children[1].currentSrc;
      let path = previous_image.replace('-l', '');
      this._full_img.setAttribute('src', path);
      this._current_image = previous_node_image;
    }
  }

  _nextPicture (event) {
    event.stopPropagation();
    if (this._current_image.parentNode.nextElementSibling) {
      let next_node_image = this._current_image.parentNode.nextElementSibling.children[0];
      let next_image = next_node_image.children[1].currentSrc;
      let path = next_image.replace('-l', '');
      this._full_img.setAttribute('src', path);
      this._current_image = next_node_image;
    }
  }

  render() {
    return html`
    <div class="wrapper">
    <div class="gallery">
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/air-balloon-l.webp" type="image/webp">
          <img data-src="images/air-balloon-l.jpg" class="gallery-img" alt="This is a beautiful picture of an air balloon in the sky.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/asia-l.webp" type="image/webp">
          <img data-src="images/asia-l.jpg" class="gallery-img" alt="This photo depicts a women on a boat somewhere in Asia.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/china-l.webp" type="image/webp">
          <img data-src="images/china-l.jpg" class="gallery-img" alt="Architecture in China, a tower of a building.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/church-l.webp" type="image/webp">
          <img data-src="images/church-l.jpg" class="gallery-img" alt="A black church in the middle of nowhere.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/city-l.webp" type="image/webp">
          <img data-src="images/city-l.jpg" class="gallery-img" alt="A modern city somewhere in Asia.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/waterfall2-l.webp" type="image/webp">
          <img data-src="images/waterfall2-l.jpg" class="gallery-img" alt="River with a tiny waterfall.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/cloud-l.webp" type="image/webp">
          <img data-src="images/cloud-l.jpg" class="gallery-img" alt="Clouds in the sky, view from high altitude.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/desert-l.webp" type="image/webp">
          <img data-src="images/desert-l.jpg" class="gallery-img" alt="A desert with cactus.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/river2-l.webp" type="image/webp">
          <img data-src="images/river2-l.jpg" class="gallery-img" alt="A river inside a canyon.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/disney-l.webp" type="image/webp">
          <img data-src="images/disney-l.jpg" class="gallery-img" alt="The Disney castle in Orlando.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/forest-l.webp" type="image/webp">
          <img data-src="images/forest-l.jpg" class="gallery-img" alt="A road crossing a green forest.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/greece-l.webp" type="image/webp">
          <img data-src="images/greece-l.jpg" class="gallery-img" alt="Greece architecture.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/city2-l.webp" type="image/webp">
          <img data-src="images/city2-l.jpg" class="gallery-img" alt="A city street with an arch.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/lake-l.webp" type="image/webp">
          <img data-src="images/lake-l.jpg" class="gallery-img" alt="Women coming out of a lake somewhere lost in the nature.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/mountain-l.webp" type="image/webp">
          <img data-src="images/mountain-l.jpg" class="gallery-img" alt="Peak of a high mountain and a cloudy sky.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/new-york-l.webp" type="image/webp">
          <img data-src="images/new-york-l.jpg" class="gallery-img" alt="A street in New York.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/pool-l.webp" type="image/webp">
          <img data-src="images/pool-l.jpg" class="gallery-img" alt="Relaxing pool in a luxury hotel.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/restaurant-l.webp" type="image/webp">
          <img data-src="images/restaurant-l.jpg" class="gallery-img" alt="Restaurant on the edge of a river somewhere in France.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/river-l.webp" type="image/webp">
          <img data-src="images/river-l.jpg" class="gallery-img" alt="River with people kayaking.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/road-l.webp" type="image/webp">
          <img data-src="images/road-l.jpg" class="gallery-img" alt="Long straight road somewhere in USA.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/sand-l.webp" type="image/webp">
          <img data-src="images/sand-l.jpg" class="gallery-img" alt="Desert with rocky mountains on the background.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/sea-l.webp" type="image/webp">
          <img data-src="images/sea-l.jpg" class="gallery-img" alt="Beautiful transparent sea water somewhere in the pacific.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/sfo-l.webp" type="image/webp">
          <img data-src="images/sfo-l.jpg" class="gallery-img" alt="Golden gate in San Francisco.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/stars-l.webp" type="image/webp">
          <img data-src="images/stars-l.jpg" class="gallery-img" alt="Wonderful astronomy shot of stars in the sky.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/tents-l.webp" type="image/webp">
          <img data-src="images/tents-l.jpg" class="gallery-img" alt="Camping tents hanging on a cliff.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/waterfall-l.webp" type="image/webp">
          <img data-src="images/waterfall-l.jpg" class="gallery-img" alt="Picture of a waterfall between big rocks.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/mountain2-l.webp" type="image/webp">
          <img data-src="images/mountain2-l.jpg" class="gallery-img" alt="Beautiful picture of a mountain landscape.">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._openPicture}">
          <source srcset="images/wave-l.webp" type="image/webp">
          <img data-src="images/wave-l.jpg" class="gallery-img" alt="This is a picture from a wave in the ocean.">
        </picture>
      </figure>
    </div>
    <div class="fold"></div>
    <div class="detail-container">
      <div class="detail-select">Select an image in the gallery.</div>
      <div class="detail">
        <div id="detail-text-about">About :</div>
        <div class="loading">
          <img class="loading-img ${classMap(this._loading_classes)}" src="images/loading.gif">
          <img class="detail-img">
        </div>
        <div id="detail-text"></div>
      </div>
    </div>
  </div>
  <div class="fullview-container ${classMap(this._full_view_container_classes)}" @click="${this._closePicture}">
    <div class="close" @click="${this._closePicture}"></div>
    <div class="arrow-left" @click="${this._previousPicture}"></div>
    <img id="full-img">
    <div class="arrow-right" @click="${this._nextPicture}"></div>
  </div>`;
  }
}

customElements.define("main-application", MainApplication);