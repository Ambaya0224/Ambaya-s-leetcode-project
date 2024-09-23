document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const productName = document.getElementById('productName').value.trim();
    const productDescription = document.getElementById('productDescription').value.trim();
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    // Clear previous error messages and borders
    document.getElementById('productNameError').textContent = '';
    document.getElementById('productDescriptionError').textContent = '';
    document.getElementById('productPriceError').textContent = '';
    
    document.getElementById('productName').classList.remove('error-border');
    document.getElementById('productDescription').classList.remove('error-border');
    document.getElementById('productPrice').classList.remove('error-border');

    // Validation flags
    let isValid = true;

    // Validate Product Name
    if (productName.length === 0) {
        isValid = false;
        document.getElementById('productNameError').textContent = 'Product Name is required.';
        document.getElementById('productName').classList.add('error-border');
    } else if (productName.length < 3 || productName.length > 50) {
        isValid = false;
        document.getElementById('productNameError').textContent = 'Product Name must be between 3 and 50 characters.';
        document.getElementById('productName').classList.add('error-border');
    }

    // Validate Product Description
    if (productDescription.length === 0) {
        isValid = false;
        document.getElementById('productDescriptionError').textContent = 'Product Description is required.';
        document.getElementById('productDescription').classList.add('error-border');
    } else if (productDescription.length < 10 || productDescription.length > 200) {
        isValid = false;
        document.getElementById('productDescriptionError').textContent = 'Product Description must be between 10 and 200 characters.';
        document.getElementById('productDescription').classList.add('error-border');
    }

    // Validate Product Price
    if (isNaN(productPrice) || productPrice <= 0) {
        isValid = false;
        document.getElementById('productPriceError').textContent = 'Product Price must be a positive number.';
        document.getElementById('productPrice').classList.add('error-border');
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Product created successfully!');
        // Add code here to submit the form data to the server
    }
});
