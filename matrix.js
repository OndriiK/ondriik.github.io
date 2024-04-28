const canvas = document.getElementById('Matrix');
// Get the 2D rendering context for the canvas
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the characters to be used in the matrix
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
// Calculate the number of columns based on the canvas width and font size
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    // Fill the entire canvas with black
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set the fill style to green
    context.fillStyle = '#0F0';
    // Set the font to monospace with the defined font size
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        // Get a random character from the alphabet
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        // Draw the character at the current position
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
        
        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

// Call the draw function every 50 milliseconds
setInterval(draw, 50);