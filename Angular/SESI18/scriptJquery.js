$('document').ready(function(){
    // console.log($('#title'));
    // console.log($('.page-box'));
    // console.log($('#title'));

    //Event Listener
    $('#title').click(function(){
        alert("You clicked title");
    })

    $('#submitButton').click(function(e){
        e.preventDefault();
        // let username = $('#username').val();
        let username = $('input[name="username]').val();
        alert("Halo, " + username);
    })

    $('.page-box:first').addClass('btn-danger');
    $('#submitButton').addClass("btn btn-primary");
});