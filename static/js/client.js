let buttonClose = document.getElementById('buttonClose')

buttonClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    window.location.replace("http://localhost:3000/search");
    console.log('Success')
    return false;
});