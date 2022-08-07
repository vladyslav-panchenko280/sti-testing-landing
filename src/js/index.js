const headerNavigation = document.querySelector('.header__navigation');
const headerNavList = document.querySelector('.header__links');
const loginBtn = document.querySelector('.loginBtnContainer');
const headerContainer = document.querySelector('.header__container');
const buttonsContainer = document.querySelector('.header__buttonsContainer');
const menuIcon = document.querySelector('#menuIcon');
const exitIcon = document.querySelector('#exitIcon');
const modal = document.querySelector('.overlay');
const menuMobile = document.querySelector('.menuMobile');
const mainArea = document.querySelector('main');

const footerDiscoverKits = document.querySelector('.footer__discoverKits');
const footerLinksFirstPart = document.querySelector('#firstPartOfLinks');
const footerLinksSecondPart = document.querySelector('#secondPartOfLinks');
const footerSocials = document.querySelector('.footer__socials');
const footerInputWithButton = document.querySelector('#inputWithButtonSmall');
const footerBottom = document.querySelector('.footer__bottom');
const footerSpan = document.querySelector('.footer__span');
const footerLinksContainer = document.querySelector('.footer__linksContainer');
const footerContainer = document.querySelector('.footer__container');

console.log(footerLinksFirstPart);


function toggleElementsHeader() {
     if (window.screen.width <= 580) {
          if (mainArea.contains(modal)) modal.remove();
          if (headerContainer.contains(headerNavigation) && buttonsContainer.contains(loginBtn)) {
               headerNavigation.remove();
               loginBtn.remove();

               menuMobile.append(headerNavigation);
               menuMobile.append(loginBtn);

               if (!headerContainer.contains(menuIcon)) {
                    headerContainer.prepend(menuIcon);
               }

          }
     } else {
          if (headerContainer.contains(menuIcon)) menuIcon.remove();
          if (mainArea.contains(modal)) modal.remove();
          if (!headerContainer.contains(headerNavigation) && !buttonsContainer.contains(loginBtn)) {
               headerNavigation.remove();
               loginBtn.remove();

               headerContainer.prepend(headerNavigation);
               buttonsContainer.append(loginBtn)

               if (headerContainer.contains(menuIcon)) menuIcon.remove();
          }
     }
}

function toggleElementsFooter() {
     if (window.screen.width <= 580) {
          if (footerLinksContainer.contains(footerLinksFirstPart)) footerLinksFirstPart.remove();
          if (footerContainer.contains(footerDiscoverKits)) footerDiscoverKits.remove();
          if (footerBottom.contains(footerInputWithButton)) footerInputWithButton.remove();
          if (footerBottom.contains(footerSocials)) footerSocials.remove();
          if (footerLinksContainer.contains(footerLinksSecondPart)) footerLinksSecondPart.remove();
          if (footerContainer.contains(footerLinksContainer)) footerLinksContainer.remove();

          footerBottom.prepend(footerLinksSecondPart);
          footerContainer.append(footerSocials);
          footerContainer.append(footerInputWithButton);

     } else {
          if (footerBottom.contains(footerLinksSecondPart)) footerLinksSecondPart.remove();
          if (footerContainer.contains(footerSocials)) footerSocials.remove();
          if (footerContainer.contains(footerInputWithButton)) footerInputWithButton.remove();
          if (!footerContainer.contains(footerLinksContainer) && !footerContainer.contains(footerDiscoverKits)) {
               footerContainer.append(footerLinksContainer);
               footerContainer.append(footerDiscoverKits);

               footerLinksContainer.append(footerLinksSecondPart);
               footerLinksContainer.append(footerLinksFirstPart);
          }
          if (!footerBottom.contains(footerSocials) && !footerBottom.contains(footerLinksContainer)) {
               footerBottom.append(footerInputWithButton);
               footerBottom.prepend(footerSocials)
          }
     }
}

function escapeKey(event) {
     event.preventDefault();
     if (event.key === 'Escape') {
          closeMobileMenu();
          console.log('s')
     }
}

function openMobileMenu() {
     document.body.style.overflow = 'hidden';
     mainArea.prepend(modal);

     document.addEventListener('keydown', escapeKey)
}

function closeMobileMenu() {
     document.body.style.overflow = 'scroll';
     modal.remove();
     document.removeEventListener('keydown', escapeKey)
}

window.addEventListener('DOMContentLoaded', toggleElementsHeader);
window.addEventListener('DOMContentLoaded', toggleElementsFooter);

menuIcon.addEventListener('click', openMobileMenu);
exitIcon.addEventListener('click', closeMobileMenu);


window.addEventListener('resize', toggleElementsHeader);
window.addEventListener('resize', toggleElementsFooter);


