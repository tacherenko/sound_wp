export function initializeModal() {
    const modal = document.getElementById("messageModal");
    const closeModal = document.getElementsByClassName("close close-email")[0];

    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

export function showModalMessage(name, message) {
    const modal = document.getElementById("messageModal");
    const modalMessage = document.getElementById("modalMessage");

    modalMessage.innerHTML = `
        <div>
            <p>${name}</p>
            <p>${message}</p>
            <p>Have a good day!</p>
            <p>Best regards,<br>Egor</p>
        </div>
    `;
    modal.style.display = "flex";
}

export function initializeVideoModal() {
    const playButton = document.querySelector('.play-button');
    const demoReelLinks = document.querySelectorAll('#demo-reel-link, #demo-reel-link-mobile, #demo-reel-link-footer');
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const video = document.getElementById("video");
    const youtubeURL = "https://www.youtube.com/embed/mUrlfwAKjQw";

    function openModal() {
        modal.style.display = "flex";
        video.src = youtubeURL + "?autoplay=1";
    }

    playButton.addEventListener('click', openModal);
    demoReelLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            openModal();
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        video.src = "";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            video.src = "";
        }
    });
}