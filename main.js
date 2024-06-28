const form = document.getElementById('contact-form')
const successMesage = document.getElementById('success-message')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const firstName = document.getElementById('first-name').value .trim()
  const lastName = document.getElementById('last-name').value .trim()
  const email = document.getElementsById('email').value .trim()

  const queryType = document.getquerySelector('input[name = "query-type"]:checked')
  const message = document.getElementsById('message').value .trim()
  const consent = document.getElementsById('consent').checked
  const formAlert = document.querySelectorAll('.form-alert')
  let isValid = true

  //Validation for firstName
  if(firstName ===''){
    isValid = false
    document.querySelector('#first-name + .form-alert').style.display = 'block'
    document.querySelector('#first-name').style.border = '1px solid var(--red)'
  }else{
    document.querySelector('#first-name + .form-alert').style.display = 'none'
    document.querySelector('#first-name').style.border = '1px solid var(--medium-grey)'
  }

  //Validation for lastName
  if(lastName ===''){
    isValid = false
    document.querySelector('#last-name + .form-alert').style.display = 'block'
    document.querySelector('#last-name').style.boorder = '1px solid var(--red)' 
  }else{
    document.querySelector('#last-name + .form-alert').style.display = 'none'
    document.querySelector('#last-name').style.border = '1px solid var(--medium-grey)'
  }

  //Validation for otherNames
  if(otherName === ''){
    isValid = false
    document.getquerySelector('#other name + .form-alert').style.display = 'block'
    document.getquerySelector('#other-name').style.border = '1px solid var(--red)'
  }else{
    document.getquerySelector('#other-name + .form-alert').style.display = 'none'
    document.getquerySelector('#other-name').style.border = '1px solid var(--medium-grey)'
  }


//Validation for Email
if(!isValidEmail(email)){
  isValid = false
  document.querySelector('#email + .form-alert').style.display = 'block'
  document.querySelector('email').style.border = '1px solid var(--red)'
}else{
  document.querySelector('#email + .form-alert').style.display = 'block'
  document.querySelector('email').style.border = '1px solid var(--medium-grey)'
}

//Validation for QueryType
if(!queryType){
  isValid = false
  document.querySelector('.radio-inputs + .form-alert').style.display = 'block'
}else{
  document.querySelector('.radio-inputs + .form-alert').stylle.display = 'none'
}

//VAlidation for Message
if(message ===''){
  isValid = false
  document.querySelector('message + .form-alert').style.display = 'block'
  document.querySelector('message').style.display = '1px solid var(--red)'
}else{
  document.querySelector('message + .form-alert').style.display = 'none'
  document.querySelector('message').style.display = '1px solid var(--medium-grey)'
}

//Validation for consent
if(!consent){
  isValid = false
  formAlert[5].classList.add('form-error')
}else{
  formAlert[5].classList.remove('form-error')
}

//Validation for Form(form is valid)
if(isValid){
  successMessage.classList.add('active')
  form.requestFullscreen()
}
})

//Validation for Email Function
function isValidEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) 
}