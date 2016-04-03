$(document).ready(function() {
    $('form.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        $('form.contact-form *').fadeOut(200);
        $('form.contact-form').prepend('Message is being processed...');

        $.ajax({
            type     : 'POST',
            cache    : false,
            url      : "mail.php",
            data     : $(this).serialize(),
            success  : function(data) {
                responseSuccess(data);
            },
            error  : function(data) {
                console.log('Silent failure.');
            }
        });

        return false;
    });

    function responseSuccess(data) {
        data = JSON.parse(data);

        if(data.status === 'success') {
            $('form.contact-form').html('Message sent succesfully.');
        } else {
            $('form.contact-form').html('Message failed to send, please contact directly.');
        }
    } 
});