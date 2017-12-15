
$(function(){
   $('#client-form input[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
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
         .done( () => $('#goodSend').attr('open', 'open') )
         .fail( () => $('#badSend').attr('open', 'open') );    
    }
}



    $('.mobile_menu_click').click(function(){
       $('.menu__category').fadeToggle();
    });
 
