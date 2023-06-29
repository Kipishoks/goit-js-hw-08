import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let dataForm = {};


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
    if ((dataForm.email && dataForm.message)) {
    evt.preventDefault();
    console.log(dataForm);
    evt.currentTarget.reset();
    dataForm = {};
    localStorage.removeItem(FORM);    
    } else {
        evt.preventDefault();
        return (console.log('Check the data please'));
        dataForm = {};
    }
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

