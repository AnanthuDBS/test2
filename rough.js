document.getElementById('changeButton').addEventListener('click', function() {
    // Get the value from the input field
    const inputValue = document.getElementById('inputField').value;

    // Change the text of the result div
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.textContent = `You entered: ${inputValue}`;
});
