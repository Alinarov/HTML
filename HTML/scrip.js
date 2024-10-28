function hacerPeticion() {
    $.ajax({
        url: 'ruta/a/tu/api', // Cambia esto a tu URL
        type: 'GET', // O 'POST' según lo que necesites
        success: function(data) {
            // Maneja la respuesta aquí
            console.log(data);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}
