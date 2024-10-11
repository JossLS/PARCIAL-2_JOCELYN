document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity-input');
    const totalElement = document.getElementById('total');
    const updateTotalButton = document.getElementById('update-total');
    const checkoutButton = document.getElementById('checkout');
    const addressInput = document.getElementById('address-input');
    
    let pricePerItem = 50;  // Precio por producto

    // Evento 1: Cambiar la cantidad de productos
    quantityInput.addEventListener('input', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity < 1) quantity = 1;
        quantityInput.value = quantity;
    });

    // Evento 2: Actualizar el total
    updateTotalButton.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        let total = pricePerItem * quantity;
        totalElement.textContent = `$${total}`;
    });

    // Evento 3: Pagar y verificar dirección de envío
    checkoutButton.addEventListener('click', function() {
        const address = addressInput.value.trim();
        if (address === '') {
            alert('Por favor, ingresa una dirección de envío.');
        } else {
            alert('Pago procesado. ¡Gracias por tu compra!');
        }
    });
});
