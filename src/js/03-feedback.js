import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const dataForm = {};


const FORM = 'feedback-form-state';
const memory = JSON.parse(localStorage.getItem(FORM));



dataLocal()

form.addEventListener('input', throttle(saveData, 1000));

function saveData(e) {
    if (memory) {
    if (memory.email) {
        dataForm.email = memory.email;
         };
    if (memory.message) {
         dataForm.message = memory.message;
           }
   };
    dataForm[e.target.name] = e.target.value;
    localStorage.setItem(FORM, JSON.stringify(dataForm))
};

form.addEventListener('submit', sendForm);
function sendForm(evt) {
    evt.preventDefault();
    console.log('send form');
    evt.currentTarget.reset();
    localStorage.removeItem(FORM);
};

function dataLocal() { 
    const saveForm = JSON.parse(localStorage.getItem(FORM));
    if (saveForm) {
            console.log('email:', saveForm.email);
        form.email.value = saveForm.email;
         console.log('message:', saveForm.message);
        form.message.value = saveForm.message;
    }
   

};

