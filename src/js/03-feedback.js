import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const FORM = 'feedback-form-state';
let dataForm = (JSON.parse(localStorage.getItem(FORM)) || {});

dataLocal();

function dataLocal(email, message) { 
    if (dataForm.email || 0) {
        form.email.value = dataForm.email;
    };
    if (dataForm.message || 0) {
         form.message.value = dataForm.message;
    };
       }
;

form.addEventListener('input', throttle(saveData, 1000));

function saveData(e) {
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
        return (alert('Check the data please'));
        dataForm = {};
    }
};



// const form = document.querySelector('.feedback-form');
// let dataForm = {};


// const FORM = 'feedback-form-state';
// const memory = JSON.parse(localStorage.getItem(FORM));

// dataLocal()

// form.addEventListener('input', throttle(saveData, 1000));

// function saveData(e) {
//     if (memory) {
//     if (memory.email) {
//         dataForm.email = memory.email;
//          };
//     if (memory.message) {
//          dataForm.message = memory.message;
//            }
//    };
//     dataForm[e.target.name] = e.target.value;
//     localStorage.setItem(FORM, JSON.stringify(dataForm))
// };

// form.addEventListener('submit', sendForm);
// function sendForm(evt) {
//     if ((dataForm.email && dataForm.message)) {
//     evt.preventDefault();
//     console.log(dataForm);
//     evt.currentTarget.reset();
//     dataForm = {};
//     localStorage.removeItem(FORM);    
//     } else {
//         evt.preventDefault();
//         return (alert('Check the data please'));
//         dataForm = {};
//     }
// };

// function dataLocal(email, message) { 
//         console.log(memory);
//     // const saveForm = JSON.parse(localStorage.getItem(FORM));
//     // console.log(saveForm);
//     if (memory) {
//             // console.log('email:', memory.email);
//         form.email.value = memory.email;
//         //  console.log('message:', saveForm.message);
//         form.message.value = memory.message;
//         dataForm.email = memory.email;
//         dataForm.message = memory.message;
//         console.log(dataForm);
//     }
   

// };

