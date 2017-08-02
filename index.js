$(document).ready(function(){
        var working = false;
    $("#submit").click(function(){
    $.ajax({
         type: 'POST',
         url: "https://formspree.io/YOUR-NAME-HERE",
         data: $('#addCommentForm').serialize(), 
         success: function(response) {
            alert("Submitted comment"); 
             $("#commentList").append("Name:" + $("#name").val() + "<br/>comment:" + $("#body").val());
         },
        error: function() {
            alert("There was an error submitting comment");
        }
     });
});
});​