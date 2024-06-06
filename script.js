const profiles = document.querySelector('.dog-profiles');
const profileCount = profiles.children.length;
let currentIndex = 0;

function moveProfiles() {
    profiles.style.transform = `translateX(-${currentIndex * 260}px)`;
    currentIndex = (currentIndex + 1) % profileCount;
}

setInterval(moveProfiles, 1000);
