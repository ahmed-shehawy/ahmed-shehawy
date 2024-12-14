document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.querySelector('input[name="name"]').value;
    const place = document.querySelector('input[name="place"]').value; 
    const date = document.querySelector('input[name="date"]').value; 
    

    const responseMessage = `thank you ${name}, A request has been received ${place} in ${date},we will reply to you as soon as possible .`;
    document.getElementById('responseMessage').innerText = responseMessage;
    document.getElementById('contactForm').reset(); 
});
