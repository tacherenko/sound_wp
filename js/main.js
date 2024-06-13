import { initializeModal, initializeVideoModal } from "./modal.js";
import { initializeBurgerMenu } from "./burger.js";
import { initializeCreditsCard } from "./card.js";
import { initializeSmoothScroll } from "./scroll.js";
import { initializeFormSubmission } from './form.js';
import { displayCardDetails } from "./cardDetails.js";

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get('id');

    displayCardDetails(cardId);
    initializeModal();
    initializeFormSubmission();
    initializeBurgerMenu();
    initializeCreditsCard();
    initializeVideoModal();
    initializeSmoothScroll();
});