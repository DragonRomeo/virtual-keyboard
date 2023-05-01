const bodyElement = document.querySelector('body');
const createKeyboard = () => {
  bodyElement.innerHTML += `<section class="main-container">
    <div class="textarea-wrapper">
        <textarea autofocus> </textarea>
    </div>
    <div class="keyboard"></div>
    </section>`;
};
createKeyboard();

const engKeyboard = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '🠕', 'Shift',
  'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '🠔', '🠗', '🠖'];

const rusKeyboard = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Delete',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '\\', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '🠕', 'Shift',
  'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '🠔', '🠗', '🠖'];

const keyboardCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const fillKeyboard = () => {
  const keyboardElement = document.querySelector('.keyboard');
  for (let i = 0; i < engKeyboard.length; i += 1) {
    const keyBtn = document.createElement('div');
    keyBtn.classList.add('keyboard__key');
    keyboardElement.append(keyBtn);
    keyBtn.setAttribute('data', keyboardCode[i]);

    const keyValue = document.createElement('p');
    keyValue.classList.add('keyboard__value');
    keyBtn.append(keyValue);
    keyValue.innerText = engKeyboard[i];
  }
};
fillKeyboard();

const keyboardElems = document.querySelectorAll('.keyboard__key');
const textarea = document.querySelector('textarea');
const keyboard = document.querySelector('.keyboard');

// Keyboards special buttons
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
// const windowBtn = document.querySelector('.keyboard__key[data=MetaLeft]');

// Classlists
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
      elem.classList.remove('active');
    }, 1000);
  };
  if (event.target.classList.contains('keyboard__key')) {
    textarea.value += event.target.innerText;
    const currentElem = document.querySelector(`.keyboard__key[data=${event.target.getAttribute('data')}`);
    toggleElem(currentElem);
  } else if (event.target.classList.contains('keyboard__value')) {
    textarea.value += event.target.innerText;
    const currentElem = document.querySelector(`.keyboard__key[data=${event.target.parentElement.getAttribute('data')}`);
    toggleElem(currentElem);
  }
};
keyboard.addEventListener('click', virtualKeyboard);

// const arrRu = [];
document.onkeydown = function press(event) {
  // Цикл для проверки, есть ли нажатая клавиша на клавиатуре.
  for (let i = 0; i < keyboardCode.length; i += 1) {
    if (event.code === keyboardCode[i]) {
      if (event.repeat !== true) {
        const currentKey = document.querySelector(`.keyboard__key[data=${event.code}] `);
        // arrRu.push(event.key);
        // console.log(arrRu);

        if (event.code === 'CapsLock') {
          capsLock.classList.toggle('active');
        } else {
          currentKey.classList.add('active');
        }
      }
    }
  }
};

document.onkeyup = function unPress(event) {
  for (let i = 0; i < keyboardElems.length; i += 1) {
    if (event.code === keyboardElems[i].getAttribute('data')) {
      setTimeout(() => {
        // console.log(event.code);
        if (event.code !== capsLock.getAttribute('data')) {
          keyboardElems[i].classList.remove('active');
        }
      }, 200);
    }
  }
};

deleteElem.addEventListener('click', () => {
  const arr = textarea.value.split('');
  console.log(arr);
});

const runOnKeys = (func, ...codes) => {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
};

let isEnglish = true;

const toggleLanguage = () => {
  if (isEnglish) {
    // console.log('раскладка переключена на Русский')
    const keyboardsArr = document.querySelectorAll('.keyboard__key');
    for (let i = 0; i < keyboardsArr.length; i += 1) {
      keyboardsArr[i].innerText = rusKeyboard[i];
    }
    isEnglish = false;
  } else {
    // console.log('раскладка переключена на Английский');
    const keyboardsArr = document.querySelectorAll('.keyboard__key');
    for (let i = 0; i < keyboardsArr.length; i += 1) {
      keyboardsArr[i].innerText = engKeyboard[i];
    }
    isEnglish = true;
  }
};

runOnKeys(
  () => toggleLanguage(),
  'ShiftLeft',
  'AltLeft',
);

const setLocalStorage = () => {
  localStorage.setItem('KeyboardLanguage', isEnglish);
};
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
  if (localStorage.getItem('KeyboardLanguage')) {
    const localStorageValue = localStorage.getItem('KeyboardLanguage');
    // console.log(localStorageValue);
    // console.log(`isEnglish из локал storage = ${isEnglish}`);
    if (isEnglish === true) {
      // console.log('условие сработало!')
      isEnglish = (localStorageValue === 'false');
      toggleLanguage();
    }
  }
};
window.addEventListener('load', getLocalStorage);
// TODO указать раскладку для переключения языка на странице!!!!!!
