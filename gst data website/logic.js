// Function to calculate SGST and CGST based on the entered amount
function calculateGST() {
    let amount = parseFloat(document.getElementById('amount').value);

    // Calculate SGST and CGST (9% each)
    let sgst = (amount * 0.09).toFixed(2);
    let cgst = (amount * 0.09).toFixed(2);

    // Update the SGST, CGST, and Total Amount fields
    document.getElementById('sgst').value = sgst;
    document.getElementById('cgst').value = cgst;
    document.getElementById('totalAmount').value = (amount + parseFloat(sgst) + parseFloat(cgst)).toFixed(2);
  }

  // Attach the calculateGST function to the 'input' event of the amount field
  document.getElementById('amount').addEventListener('input', calculateGST);


  const mybutton = document.getElementById('my-button')

  mybutton.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
  })