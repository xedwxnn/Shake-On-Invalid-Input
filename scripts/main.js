const input = document.getElementById('input');
const errorText = document.getElementById('textError');
const btn = document.getElementById('button');

function validateValue() {
    const inputValue = input.value.trim();

    if(inputValue === '') {
        errorText.classList.add('active');
        input.classList.add('shake');

        setTimeout(() => {
            errorText.classList.remove('active');
            input.classList.remove('shake');
        }, 1000);
    }

    else {
        errorText.classList.remove('active');
        input.classList.remove('shake');
    }
}

btn.addEventListener('click', validateValue);