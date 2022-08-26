const form = document.querySelector('.fill-form')
const id = (id) => document.getElementById(id);

const classes = (classes) => document.getElementsByClassName(classes);

let userName = id('username');
    email = id('email');
    password = id('password');
    errorMsg = classes('error');
    successIcon = classes('success-icon');
    failureIcon = classes('failure-icon');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      accountLogin(userName, 0, 'Username cannot be blank.');
      accountLogin(email, 1, 'email cannot be blank');
      accountLogin(password, 2, 'password cannot be blank');
    })
    
    let accountLogin = (id, serial, message) => {
      if (id.value === '') {
        errorMsg[serial].textContent = message;
        id.style.border = '2px solid #ff0000';

        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
      }
      else {
        errorMsg[serial].textContent = '';
        id.style.border = '2px solid #008000';

        failureIcon[serial].style.opacity = ' 0';
        successIcon[serial].style.opacity = '1';
      }
    };
    console.log(errorMsg)