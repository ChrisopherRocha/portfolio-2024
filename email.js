function sendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_te12zje", "template_hnse6ae", params).then(function (res){
        alert("Successfully sent" + res.status)
    })
}