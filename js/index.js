const dropdownContent = document.querySelector('.dropdown-content');
const navBurger = document.querySelector('.burger.burger1');

navBurger.addEventListener('click', ()=> {
    dropdownContent.classList.toggle('visible')
})

const sendButton = document.getElementById('contact-send-button');

sendButton.addEventListener('click', ()=> {
    const nameInput = document.getElementById('name-input');
    const subjectInput = document.getElementById('subject-input');
    const messageArea = document.getElementById('message-input');


    const email = "mailto:elcorreoquequieres@correo.com?Subject="

    var subject = `${encodeURIComponent(subjectInput.value)}&body=`
    var message = encodeURIComponent("Hola, soy " + nameInput.value + " y quisiera comentarles lo siguiente: \n\n" + messageArea.value)

    var finalString = email + subject + message
    sendButton.href = finalString
})