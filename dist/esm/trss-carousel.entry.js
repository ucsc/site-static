import { r as registerInstance, h, H as Host } from './index-1a8edb17.js';

const trssCarouselCss = "::before,::after{box-sizing:border-box}.trss-carousel{display:flex;flex-direction:column-reverse;margin:0;padding:0;position:relative;width:100%;max-width:100%;aspect-ratio:16/9}.trss-carousel ul,.trss-carousel li{list-style:none;margin:0;padding:0}.trss-carousel .frame{position:absolute;inset:0;opacity:0}.trss-carousel .frame[data-active]{opacity:1}.trss-carousel .frame>img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}.trss-carousel .controls{position:relative;border:2px solid red}.trss-carousel button{background:none;border:none;font-size:4rem;top:50%;color:rgba(255, 255, 255, 0.5);cursor:pointer;border-radius:0.25rem;padding:0 0.25rem;transform:translateY(-50%);background-color:rgba(0, 0, 0, 0.2)}.trss-carousel button.prev{left:1rem}.trss-carousel button.next{right:1rem}";

const TrssCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("section", { "aria-label": "Header" }, h("div", { class: "trss-carousel" }, h("button", { class: "trss-hero-button prev" }, "\u2190"), h("button", { class: "trss-hero-button next" }, "\u2192"), h("ul", null, h("li", { class: "frame" }, h("img", { src: "https://source.unsplash.com/5SPIwSCxOGI/", alt: "Camera" })), h("li", { class: "frame" }, h("img", { src: "https://source.unsplash.com/Q1PcwcvuFa0/", alt: "Camera" })), h("li", { class: "frame" }, h("img", { src: "https://source.unsplash.com/-bX6sdYw48s/", alt: "Camera" })))))));
  }
};
TrssCarousel.style = trssCarouselCss;

export { TrssCarousel as trss_carousel };

//# sourceMappingURL=trss-carousel.entry.js.map