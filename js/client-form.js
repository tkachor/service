$(function() {
    $('#client-form input[type=submit]').click(sendForm);
});

function sendForm(ev) {
    const form = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
                url: "https://formspree.io/tkachor@gmail.com",
                method: "POST",
                data: {
                    name: $('#name').val(),
                    phone: $('#phone').val(),
                    insrument: $('#insrument').val()
                },
                dataType: "json"
            })

            .done(() => $('#goodSend').attr('open', 'open'))
            .fail(() => $('#badSend').attr('open', 'open'));
        //  .done(() => $('#client-form')[0].reset());   
    }
}


$('.mobileMenuClick').click(function() {
    $('.menuCategory').fadeToggle();
});


$(function() {
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1500);
        }
    });
});
