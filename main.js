const email = document.getElementById('email');
const errortext = document.getElementById('errortext');
const accessbutton = document.getElementById('access-button');

function validateEmail(email) {
    const emailPattern =
        /^(?!.*\.\.)[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
    return emailPattern.test(email);
}

accessbutton.addEventListener('click', function () {
    if (!validateEmail(email.value)) {
        errortext.style.display = 'block';
    } else {
    }
});
