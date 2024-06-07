$(document).ready(function() {

    $("#loginModal").modal("show");

    $('#loginForm').submit( function(event) {
        event.preventDefault();
        $("#loginModal").modal("hide");
        alert("Bienvenido");
    });

    $('.fav-btn').click( function() {
        const itemId = $(this).closest('.row').attr('data-id')

        

        alert('Agregado a favoritos')
    });

});

function showSection(section) {
    $('#content, #favoritos-section').addClass();
    if (section == 'favoritos') {
        loadFavoritos();
        $('#favoritos-section').removeClass('d-done');
    } else {
        $('#' + section).removeClass('d-done');
    }
}

function loadFavoritos() {

}