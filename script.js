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
console.log(capsLock);

document.onkeydown = function (event) {
    if (event.repeat !== true) {
        const currentKey = document.querySelector(`.keyboard__key[data=${event.code}] `);
        console.log(currentKey);

        if (event.code === 'CapsLock') {
            capsLock.classList.toggle('active');
        } else {
            console.log(event.code);
            console.log(`event.repeat = ${event.repeat}`)

            currentKey.classList.add('active');
        }

        // setTimeout(() => {
        //     if (currentKey !== capsLock) {
        //         currentKey.classList.remove('active');
        //     }

        // }, 1000)
    }

}

const allKeyboardElements = document.querySelectorAll('.keyboard__key');
console.log(allKeyboardElements);

document.onkeyup = function (event) {
    for (let i = 0; i < allKeyboardElements.length; i++) {
        if (event.code === allKeyboardElements[i].getAttribute('data')) {
            console.log(`совпадение найдено, ${event.code}`);
            setTimeout(() => {
                    console.log(event.code)
                    console.log(capsLock)
                if (event.code !== capsLock.getAttribute('data')) {
                    allKeyboardElements[i].classList.remove('active');
                }
            }, 1500)
        }
    }
}

