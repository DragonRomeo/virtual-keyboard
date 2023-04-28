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

const keyboardButtons = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '🠕', 'Shift',
    'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '🠔', '🠗', '🠖'];

const keyboardCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];


const rusKeyboard = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
    'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\',
    'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];


const engKeyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

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


const keyboardElems = document.querySelectorAll('.keyboard__key');
const textarea = document.querySelector('textarea');
const keyboard = document.querySelector('.keyboard');


const capsLock = document.querySelector('.keyboard__key[data=CapsLock]');
const deleteElem = document.querySelector('.keyboard__key[data=Delete]');
const spaceBtn = document.querySelector('.keyboard__key[data=Space]');
const tabBtn = document.querySelector('.keyboard__key[data=Tab]');
const leftShiftBtn = document.querySelector('.keyboard__key[data=ShiftLeft]');
const leftCtrlBtn = document.querySelector('.keyboard__key[data=ControlLeft]');
const backspaceBtn = document.querySelector('.keyboard__key[data=Backspace]');
const delBtn = document.querySelector('.keyboard__key[data=Delete]');
const enterBtn = document.querySelector('.keyboard__key[data=Enter]');
const rightShiftBtn = document.querySelector('.keyboard__key[data=ShiftRight]');
const rightCtrlBtn = document.querySelector('.keyboard__key[data=ControlRight]');
const windowBtn = document.querySelector('.keyboard__key[data=MetaLeft]');

spaceBtn.classList.add('keyboard__key_space');
tabBtn.classList.add('keyboard__key_tab');
capsLock.classList.add('keyboard__key_capslock');
leftShiftBtn.classList.add('keyboard__key_shift');
leftCtrlBtn.classList.add('keyboard__key_ctrl');

backspaceBtn.classList.add('keyboard__key_backspace');
delBtn.classList.add('keyboard__key_del');
enterBtn.classList.add('keyboard__key_enter');

rightShiftBtn.classList.add('keyboard__key_shift');
rightCtrlBtn.classList.add('keyboard__key_ctrl');





const virtualKeyboard = (event) => {
    const toggleElem = (elem) => {
        elem.classList.add('active');
        setTimeout(() => {
            elem.classList.remove('active')
        }, 1000)
    }
    // console.log(event.target);
    // console.log(event.target.classList);
    if (event.target.classList.contains('keyboard__key')) {
        textarea.value += event.target.innerText;
        const currentElem = document.querySelector(`.keyboard__key[data=${event.target.getAttribute('data')}`);
        toggleElem(currentElem);
    } else if (event.target.classList.contains('keyboard__value')) {
        textarea.value += event.target.innerText;
        const currentElem = document.querySelector(`.keyboard__key[data=${event.target.parentElement.getAttribute('data')}`);
        toggleElem(currentElem);
    }
}

keyboard.addEventListener('click', virtualKeyboard);

const arrRu = []
document.onkeydown = function (event) {
    for (let i = 0; i < keyboardCode.length; i++) { //Цикл для проверки, есть ли нажатая клавиша на клавиатуре.
        if (event.code === keyboardCode[i]) {
            if (event.repeat !== true) {
                const currentKey = document.querySelector(`.keyboard__key[data=${event.code}] `);
                // console.log(currentKey);
                // console.log(event.code);
                arrRu.push(event.key);
                console.log(arrRu);

                if (event.code === 'CapsLock') {
                    capsLock.classList.toggle('active');
                } else {
                    currentKey.classList.add('active');
                }
            }
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
            }, 1000)
        }
    }
}

deleteElem.addEventListener('click', () => {
    const arr = textarea.value.split('')
    console.log(arr);
})
