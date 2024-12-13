document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج
    const name = document.querySelector('input[name="name"]').value;
    const place = document.querySelector('input[name="place"]').value; // تغيير 'email' إلى 'place'
    const date = document.querySelector('input[name="date"]').value; // تغيير 'message' إلى 'date'
    
    // عرض رسالة تأكيد
    const responseMessage = `thank you ${name}, A request has been received ${place} in ${date},we will reply to you as soon as possible .`;
    document.getElementById('responseMessage').innerText = responseMessage;
    document.getElementById('contactForm').reset(); // إعادة تعيين النموذج
});