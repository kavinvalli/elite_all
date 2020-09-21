let button, started, canvas, kaleidoscope, kaleidoscopeButton, normalButton
widthInput = document.getElementById('canvasWidth')
heightInput = document.getElementById('canvasHeight')
width = widthInput.value
height = heightInput.value
document.getElementById('createCanvasForm').addEventListener('submit', function(e) {
    e.preventDefault()
    widthInput = document.getElementById('canvasWidth')
    heightInput = document.getElementById('canvasHeight')
    width = widthInput.value
    height = heightInput.value
    form = document.getElementById('createCanvasForm')
    form.style.display = 'none';
    started = true
    setup(width, height);
})

function setup(width, height) {
    if (started) {
        kaleidoscope
        createCanvas(width, height);
        canvas = true,
            background(102);
        setupButton(width, height);
        setupKailedoscopeButton(width, height)
    }
}

function setupButton(widthOfCanvas, heightOfCanvas) {
    if (started) {
        button = createButton('Clear Canvas');
        button.position(widthOfCanvas - 100, heightOfCanvas - 100);
        button.mousePressed(clearCanvas);
    }
}

function setupKailedoscopeButton(widthOfCanvas, heightOfCanvas) {
    if (started) {
        kaleidoscopeButton = createButton('Kaleidoscope')
        kaleidoscopeButton.position(widthOfCanvas - 200, heightOfCanvas - 100)
        kaleidoscopeButton.mousePressed(Kaleidoscope)
    }
}

function clearCanvas() {
    background(102);
}

let symmetry = 6;
let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

function Kaleidoscope() {
    setupKaleidoscope()
}

function setupKaleidoscope() {
    kaleidoscope = true;
    kaleidoscopeButton.attribute('disabled', '')
    angleMode(DEGREES);
    background(102);
    saveButton = createButton('save');
    saveButton.mousePressed(saveFile);
    saveButton.position(width - 300, height - 100)

    // clearButton = createButton('clear');
    // clearButton.mousePressed(clearScreen);

    fullscreenButton = createButton('Full Screen');
    fullscreenButton.mousePressed(screenFull);
    fullscreenButton.position(width - 400, height - 100)

    // brushSizeSlider = createButton('Brush Size Slider');
    sizeSlider = createSlider(1, 32, 4, 0.1);
    sizeSlider.position(width - 600, height - 100)

    normalButton = createButton('Normal Canvas')
    normalButton.position(width - 700, height - 100)
    normalButton.mousePressed(normalDraw)
}

// Save File Function
function saveFile() {
    save('design.jpg');
}

// Clear Screen function
function clearScreen() {
    background(127);
}

// Full Screen Function
function screenFull() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function draw() {
    if (kaleidoscope) {
        translate(width / 2, height / 2);

        if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
            let mx = mouseX - width / 2;
            let my = mouseY - height / 2;
            let pmx = pmouseX - width / 2;
            let pmy = pmouseY - height / 2;

            if (mouseIsPressed) {
                for (let i = 0; i < symmetry; i++) {
                    rotate(angle);
                    let sw = sizeSlider.value();
                    strokeWeight(sw);
                    line(mx, my, pmx, pmy);
                    push();
                    scale(1, -1);
                    line(mx, my, pmx, pmy);
                    pop();
                }
            }
        }
    } else {
        stroke(255);
        if (mouseIsPressed === true) {
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    }
}

function normalDraw() {
    background(102)
    kaleidoscope = false;
    kaleidoscopeButton.removeAttribute('disabled')
}