'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  // Scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////////////
// Page NAvigation

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', e => {
//     e.preventDefault();
//     const id = el.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add eventListner to common parent element
document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  // 2. determine which element originated the event
  const el = e.target.getAttribute('href');
  // 3. Matching strategy && Scroll into href of that element
  e.target.classList.contains('nav__link') &&
    document.querySelector(el).scrollIntoView({ behavior: 'smooth' });
});

// Tabbed component

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause ;; ila mall9a ta zfftta ykhrejj mn function
  if (!clicked) return;

  //Remove active classes
  tabs.forEach(tab => {
    tab.classList.remove('operations__tab--active');
  });

  tabsContent.forEach(tab => {
    tab.classList.remove('operations__content--active');
  });

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = (status, opacity) => {
  nav.addEventListener(status, function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = opacity;
      });
      logo.style.opacity = opacity;
    }
  });
};
handleHover('mouseover', 0.5);
handleHover('mouseout', 1);

// Sticky Navigation
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const strickyNav = function (entries) {
  const [entry] = entries; // like entry = entries[0]

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(strickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(sec => {
  sectionObserver.observe(sec);
  sec.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]'); // select images which have a data-src

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // keep blur effect in the img until its downloaded ,for slow network
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlid = 0;
  const maxSlide = slides.length;

  // Functions

  const createDots = function () {
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const goToSlide = function (currentSlid) {
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translateX(${100 * (i - currentSlid)}%)`) // -100%, 0%, 100%, 200%
    );
    activateDot(currentSlid);
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((d, _) => d.classList.remove('dots__dot--active'));
    dotContainer.classList.remove('dots__dot--active');
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const init = function () {
    createDots();
    goToSlide(0);
    activateDot(0);
  };
  init();
  // Event handlers
  btnRight.addEventListener('click', function () {
    currentSlid === maxSlide - 1 ? (currentSlid = 0) : currentSlid++;
    goToSlide(currentSlid);
  });

  btnLeft.addEventListener('click', function () {
    currentSlid === 0 ? (currentSlid = maxSlide - 1) : currentSlid--;
    goToSlide(currentSlid);
  });

  // clavier keys events
  document.addEventListener('keydown', function (e) {
    currentSlid === maxSlide - 1
      ? (currentSlid = 0)
      : currentSlid++ && e.key === 'ArrowRight' && goToSlide(currentSlid);
    currentSlid === 0
      ? (currentSlid = maxSlide - 1)
      : currentSlid-- && e.key === 'ArrowLeft' && goToSlide(currentSlid);
  });

  dotContainer.addEventListener('click', function (e) {
    const targetDot = e.target;
    const { slide } = targetDot.dataset;

    activateDot(slide);
    goToSlide(targetDot.dataset.slide);
  });
};
slider();
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*
// Selecting Elem ents
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
/*
const message = document.createElement('div');
message.classList.add('cookie-message');

 // message.textContent =
 // 'We use cookied for improved functionality and analytics.';

message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message); // set the element the FIRST child of the selected item
header.append(message); // set the element the LAST child of the selected item
//header.append(message.cloneNode(true));

//header.before(message);  // before the header
//header.after(message);    // after ...

// Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // The newest Way
    //message.parentElement.removeChild(message); // the oldest way
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color); // get real style of that element
console.log(getComputedStyle(message).height); // get real style of that element

// Change real style of an element
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangred'); // change value of an property

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Set Attributes
logo.alt = 'Beautiful minimalist logo';

// Non-Standard
console.log(logo.designer); // undefined
console.log(logo.setAttribute('designer', 'Bankist')); // set
console.log(logo.getAttribute('designer')); // defined but set it first *deja t setta f line li lfo9*

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // return absolute link with @ip
console.log(link.getAttribute('href ')); // return '#'

// Data attributes

console.log(logo.dataset.versionNumber); //3.0

// Classes
logo.classList.add('c', 'c2');
logo.classList.remove('c', 'c2');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use this make element contain only one class
logo.className = 'className';
*/

/*
const h1 = document.querySelector('h1');
const alertH1 = _ => {
  alert('addEventListner: Great Youre reading the heading '); // newest way
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(
  h1.removeEventListener('mouseenter', alertH1), // remove event so the second time
  3000
);
*/
/*
// Get random Color rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = _ =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function () {
  this.style.backgroundColor = randomColor(); // this keyword points always to the element in which the eventHandler is attouched
});

document.querySelector('.nav__links').addEventListener('click', function () {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function () {
  this.style.backgroundColor = randomColor();
});

// Stop propagation
// e.stopPropagation();


const h1 = document.querySelector('h1');

// Going downwards child
h1.querySelectorAll('.highlight');
h1.firstElementChild.firstElementChild.style.color = 'white';
h1.firstElementChild.lastElementChild.style.color = 'orangred';
h1.parentElement; // get parent element of h1
h1.parentNode; // the same thing as parentElemnt

// Going upwards
h1.closest('.header');   // select the closest element that countain "header" class

// Going sideways: siblings
h1.previousElementSibling; // get child element before it
h1.nextElementSibling; // get child element after it

h1.parentElement.children; // get all siblings of that parent element
*/
