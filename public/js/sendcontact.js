(function($){
$(document).ready(function(){
    var from,subject,text;

    $("#send_email").click(function(){
        from = $("#email").val();
        subject = $("#name").val();
        text = $("#content").val();
        $("#message").text("Sending... please wait");
        console.log(from,subject,text);

        $.get("/send",{from:from, subject:subject, text:text}, function(data){
            if (data=="sent"){
                $("#message").text("Sent");
		$("#name").val('');
		$("#email").val('');
		$("#content").val('');
            } else{
                $("#message").text("Error :(");
            }
        });
    });
});
})(this.jQuery);
