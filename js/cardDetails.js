import { cardData } from './cardData.js';

export function displayCardDetails(cardId) {
    if (cardData[cardId]) {
        const imageContainer = document.getElementById('image-container');
        if (imageContainer) {
            const imageElement = document.createElement('img');
            imageElement.src = cardData[cardId].imageUrl;
            imageElement.alt = cardData[cardId].title;
            imageElement.className = 'image-placeholder';
            imageContainer.appendChild(imageElement);
        }

        const cardTitle = document.getElementById('card-title');
        if (cardTitle) {
            cardTitle.textContent = cardData[cardId].title;
        }

        const videoPlayer = document.getElementById('video-player');
        if (videoPlayer) {
            videoPlayer.src = cardData[cardId].videoUrl;
        }
        
        const leftDescriptionElement = document.querySelector('.left-description .left-text');
        if (leftDescriptionElement) {
            leftDescriptionElement.textContent = cardData[cardId].leftDescription;
        }

        const subtitleElementL = document.querySelector('.left-description .subtitle-card');
        if (subtitleElementL) {
            subtitleElementL.textContent = cardData[cardId].subtitleL;
        }

        const subtitleElement = document.querySelector('.right-description .subtitle-card');
        if (subtitleElement) {
            subtitleElement.textContent = cardData[cardId].subtitle;
        }

        const rightDescriptionElement = document.querySelector('.right-description .right-text');
        if (rightDescriptionElement) {
            const rightDescriptionList = cardData[cardId].rightDescription;
            rightDescriptionElement.innerHTML = rightDescriptionList.map(item => `<li>${item}</li>`).join('');
        }
    } else {
        const cardTitle = document.getElementById('card-title');
        if (cardTitle) {
            cardTitle.textContent = 'Card Not Found';
        }

        const cardDescription = document.getElementById('card-description');
        if (cardDescription) {
            cardDescription.textContent = 'The card you are looking for does not exist.';
        }
    }
}
