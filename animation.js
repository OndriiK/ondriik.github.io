// handles randimizing the icon positions for skills section
function randomizeIcons() {
    document.querySelectorAll('.programming-languages img').forEach(img => {
        const x = Math.random() * 50 - 30; // Random value between -25 and 25
        const y = Math.random() * 50 - 30; // Random value between -25 and 25
        const rotation = Math.random() * 30 - 20; // Random value between -15 and 15
        img.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(1.5)`;
        console.log("transformed");
    });
}

// randomizes the positions of the icons when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    const programmingLanguagesDiv = document.querySelector('.programming-languages');
    // Randomize the positions of the icons or disperse them when the div is clicked
    programmingLanguagesDiv.addEventListener('click', function() {
        if (programmingLanguagesDiv.classList.contains('dispersed')) {
            randomizeIcons();
            programmingLanguagesDiv.classList.toggle('dispersed');
            return;
        }
        programmingLanguagesDiv.classList.toggle('dispersed');
    
        let windowWidth = document.documentElement.clientWidth;
        let scaleValue;
        if (windowWidth >= 768 && windowWidth < 1200) {
            scaleValue = 1.2;
        }
        else if (windowWidth >= 1200) {
            scaleValue = 0.8;
        }
        else {
            scaleValue = 1;
        }

        programmingLanguagesDiv.querySelectorAll('img').forEach(img => {
            img.style.transform = `translate(0,0) rotate(0deg) scale(${scaleValue})`;
        });
    });
    
    document.querySelectorAll('.programming-languages img').forEach(img => {
        const x = Math.random() * 50 - 30; // Random value between -25 and 25
        const y = Math.random() * 50 - 30; // Random value between -25 and 25
        const rotation = Math.random() * 30 - 20; // Random value between -15 and 15
        img.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(1.5)`;
    });
});