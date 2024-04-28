document.addEventListener('DOMContentLoaded', function() {
    // Hide all elements with the class 'overlay'
    document.querySelectorAll('.overlay').forEach(function(overlay) {
        overlay.style.display = 'none';
    });
    document.querySelectorAll('.close-button').forEach(function(closeButton) {  
        closeButton.style.display = 'none';
    });
    document.querySelectorAll('.education-paragraph').forEach(function(description) {
        description.style.display = 'none';
    });
    document.getElementById('nav-overlay').style.display = 'none';
});

let intervalId = null;
let typingInProgress = false;
let aboutMe = 'Hello! I am a software developer with a passion for creating web applications. I am proficient in many programming languages and I am always eager to learn new technologies. I am currently seeking new opportunities to grow my skills and contribute to exciting projects. Feel free to reach out to me if you would like to collaborate!'

// Add click event listener to the 'toggle-button'
document.getElementById('toggle-button').addEventListener('click', function() {
    let terminal = document.querySelector('#terminal-window');
    // Toggle the visibility of the terminal window
    if (terminal.style.visibility == 'hidden') {
        terminal.style.visibility = 'visible';
    }
    else {
        terminal.style.visibility = 'hidden';
    }
    let paragraph = document.querySelector('#terminal-window p');
    paragraph.classList.toggle('hidden');

    // If typing is in progress, clear the interval and reset the flag
    if (typingInProgress) {
        clearInterval(intervalId);
        typingInProgress = false;
    }

    // Split the 'aboutMe' string into words
    let words = aboutMe.split(' ');
    // Clear the text content of the paragraph
    paragraph.textContent = '';

    let i = 0;
    // Set the flag to indicate that typing is in progress
    typingInProgress = true;
    intervalId = setInterval(function() {
        if (i < words.length - 1) {
            // Add the next word to the paragraph
            paragraph.textContent += words[i] + ' ';
            i++;
        }
        else if (i == words.length - 1) {
            // Add the last word to the paragraph
            paragraph.textContent += words[i];
            i++;
        }
        else {
            // Clear the interval and reset the flag
            clearInterval(intervalId);
            typingInProgress = false;
        }
    }, 100);
});

// Add click event listener to the 'close-button'
document.getElementById('close-button').addEventListener('click', function() {
    let terminal = document.querySelector('#terminal-window');
    // Toggle the visibility of the terminal window
    if (terminal.style.visibility == 'hidden') {
        terminal.style.visibility = 'visible';
    }
    else {
        terminal.style.visibility = 'hidden';
    }
    let paragraph = document.querySelector('#terminal-window p');
    paragraph.classList.toggle('hidden');

    // If typing is in progress, clear the interval and reset the flag
    if (typingInProgress) {
        clearInterval(intervalId);
        typingInProgress = false;
    }
});

document.querySelectorAll('.description-toggle-button').forEach(function(button) {
    button.addEventListener('click', function() {
        let overlay = this.nextElementSibling;
        let closeButton = overlay.nextElementSibling;
        let description = closeButton.nextElementSibling;
        let burgerButton = document.getElementById('burger-button');

        // Toggle the display of the overlay, close button, and description
        if (description.style.display == 'none') {
            overlay.style.display = 'block';
            closeButton.style.display = 'block';
            overlay.classList.add('shown');
            closeButton.classList.add('shown');

            // Decrease the z-index of the burger button
            burgerButton.style.zIndex = '1';

            // Split the description text into words
            let words = description.textContent.split(' ');
            description.textContent = '';
            description.style.display = 'block';
            description.classList.add('shown');

            setTimeout(function() {
                let i = 0;
                let intervalId = setInterval(function() {
                    if (i < words.length - 1) {
                        description.textContent += words[i] + ' ';
                        i++;
                    }
                    else if (i == words.length - 1) {
                        // Add the last word to the description
                        description.textContent += words[i];
                        i++;
                    }
                    else {
                        // Clear the interval
                        clearInterval(intervalId);
                    }
                }, 100);
            }, 1000);
        } else {
            // Hide the description, overlay, and close button
            description.style.display = 'none';
            overlay.style.display = 'none';
            closeButton.style.display = 'none';
        }
    });
});

document.querySelectorAll('.close-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Hide all elements with the class 'shown'
        document.querySelectorAll('.shown').forEach(function(item) {
            item.classList.remove('shown');
            item.style.display = 'none';

            // Reset the z-index of the burger button
            let burgerButton = document.getElementById('burger-button');
            burgerButton.style.zIndex = '7';
        });
    });
});

document.getElementById('contact-button').addEventListener('click', function() {
    let chatWindow = document.getElementById('chat-window');
    // Toggle the display of the chat window
    if (chatWindow.style.display == 'none') {
        chatWindow.style.display = 'block';
    }
    else {
        chatWindow.style.display = 'none';
        let chatMessages = document.getElementById('chat-messages');
        let paragraphs = chatMessages.querySelectorAll('p');
        // Remove all paragraphs in the chat messages
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].remove();
        }
    }
});

document.getElementById('chat-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    let chatInput = document.getElementById('chat-input');
    let chatMessages = document.getElementById('chat-messages');
    let chatForm = document.getElementById('chat-form');

    // Append the user's message to the chat messages
    let userMessage = document.createElement('p');
    userMessage.textContent = 'Message: ' + chatInput.value;
    chatMessages.insertBefore(userMessage, chatForm);

    // Append the program's response to the chat messages
    let programResponse = document.createElement('p');
    programResponse.textContent = 'Automated response: Thank you for leaving me a message! I will get back to you as soon as I can :)';
    chatMessages.insertBefore(programResponse, chatForm);

    // Clear the chat input
    chatInput.value = '';
});

// this is the same functionality as when the chat-button is pressed twice
document.getElementById('chat-close-button').addEventListener('click', function() {
    let chatWindow = document.getElementById('chat-window');
    // Hide the chat window
    chatWindow.style.display = 'none';

    let chatMessages = document.getElementById('chat-messages');
    let paragraphs = chatMessages.querySelectorAll('p');
    // Remove all paragraphs in the chat messages
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].remove();
    }
});

document.getElementById('burger-button').addEventListener('click', function() {	
    let nav = document.getElementById('navigation');
    let overlay = document.getElementById('nav-overlay');

    // Toggle the display of the navigation and overlay
    if (nav.classList.contains('tucked')) {
        overlay.style.display = 'block';
        nav.style.right = '0';
        nav.classList.remove('tucked');
    }
    else {
        overlay.style.display = 'none';
        nav.style.right = '-40%';
        nav.classList.add('tucked');
    }

});

// Add click event listener to the 'nav-overlay' so the nav can be closed by clicking anywhere on the overlay
document.getElementById('nav-overlay').addEventListener('click', function() {
    let nav = document.getElementById('navigation');
    // Hide the navigation and overlay
    nav.style.right = '-40%';
    nav.classList.add('tucked');
    this.style.display = 'none';
});
