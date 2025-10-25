import initMenuHamburguer from "./modules/hamburguermenu.js";

initMenuHamburguer();

import initAnimaNumeros from "./modules/animanumeros.js";

initAnimaNumeros();

import SlideNav from "./modules/slide.js";

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl(".custom-controls");
