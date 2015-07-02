
$(document).ready(function(){
    var from,to,subject,text;

    $("#send_email").click(function(){
        to = $("#email").val();
        subject = $("#name").val();
        text = $("#content").val();
        $("#message").text("Sending... please wait");
        console.log(to,subject,text);

        $.get("/send",{to:to, subject:subject, text:text}, function(data){
            if (data=="sent"){
                $("#message").text("Sent");
            } else{
                $("#message").text("Error :(");
            }
        });
    });
});