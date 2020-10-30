"use strict";

module.exports = function () {

    const addError = (fieldName, form) => {

        fieldName.classList.add('error');
        form.btn.setAttribute('disabled', 'disabled');

        fieldName.scrollIntoView({block: "center", behavior: "smooth"});
    };

    const removeError = (e) => {

        if(e.target.classList.contains('error')) {

            e.target.classList.remove('error');
            e.currentTarget.btn.removeAttribute('disabled');
        }
    };

    const validateField = function (fieldName, form) {

        if (!fieldName.value) {
            addError(fieldName, form);
            return false
        }
        if (fieldName.name === 'email' && !fieldName.value.includes('@')) {
            addError(fieldName, form);
            return false
        }

        return true
    };

    {
        const formMessage = document.forms.message;
        const name = formMessage.person;
        const messageEmail = formMessage.email;
        const message = formMessage.message;

        const messageHandler = function (e) {
            e.preventDefault();
            const form = e.currentTarget;

            if (validateField(name, form) && validateField(messageEmail, form) && validateField(message, form)) {
                form.submit();
            }
        };

        formMessage.addEventListener('submit', messageHandler);
        formMessage.addEventListener('focusin', removeError);
    }


    {
        const formSubscribe = document.forms.subscribe;
        const subscribeEmail = formSubscribe.email;

        const subscribeHandler = function (e) {
            e.preventDefault();
            const form = e.currentTarget;

            if (validateField(subscribeEmail, form)) {
                form.submit();
            }
        };

        formSubscribe.addEventListener('submit', subscribeHandler);
        formSubscribe.addEventListener('focusin', removeError);
    }
}