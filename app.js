document.getElementById('update-total').addEventListener('click', function () {
    // Obtener la cantidad ingresada en el input
    const quantity = parseInt(document.getElementById('quantity-input').value);
    
    // Suponemos que el precio por unidad es $50
    const pricePerUnit = 50;
    
    // Calcular el total
    const total = quantity * pricePerUnit;
    
    // Actualizar el DOM con el nuevo total
    document.getElementById('total').textContent = '$' + total;
});
