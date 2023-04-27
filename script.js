const bodyElement = document.querySelector('body');

const createKeyboard = () => {
    bodyElement.innerHTML += `<section class="main-container">
    <div class="textarea-wrapper">
        <textarea autofocus> </textarea>
    </div>
    <div class="keyboard"></div>
    </section>`;
}
createKeyboard();

const keyboardButtons = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
const keyboardCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

const fillKeyboard = () => {
    const keyboardElement = document.querySelector('.keyboard');

    for (let i = 0; i < keyboardButtons.length; i++) {
        const keyBtn = document.createElement('div');
        keyBtn.classList.add('keyboard__key');
        keyboardElement.append(keyBtn);
        keyBtn.setAttribute('data', keyboardCode[i])

        const keyValue = document.createElement('p');
        keyValue.classList.add('keyboard__value');
        keyBtn.append(keyValue);

        keyValue.innerText = keyboardButtons[i];
    }
}
fillKeyboard();

const capsLock = document.querySelector('.keyboard__key[data=CapsLock]');
const keyboardElems = document.querySelectorAll('.keyboard__key');
const textarea = document.querySelector('textarea');
const keyboard = document.querySelector('.keyboard');
console.log(keyboard);



const virtualKeyboard = (event) => {
    // console.log(event.target);
    // console.log(event.target.classList);
    if (event.target.classList.contains('keyboard__key') || event.target.classList.contains('keyboard__value')) {
        textarea.value += event.target.innerText;
    }
}

keyboard.addEventListener('click', virtualKeyboard);

document.onkeydown = function (event) {
    if (event.repeat !== true) {
        const currentKey = document.querySelector(`.keyboard__key[data=${event.code}] `);
        console.log(currentKey);

        if (event.code === 'CapsLock') {
            capsLock.classList.toggle('active');
        } else {
            currentKey.classList.add('active');
        }
    }
}


document.onkeyup = function (event) {
    for (let i = 0; i < keyboardElems.length; i++) {
        if (event.code === keyboardElems[i].getAttribute('data')) {
            setTimeout(() => {
                console.log(event.code)
                if (event.code !== capsLock.getAttribute('data')) {
                    keyboardElems[i].classList.remove('active');
                }
            }, 1500)
        }
    }
}

