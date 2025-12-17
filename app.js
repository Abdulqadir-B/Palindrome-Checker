// Function to check palindrome
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed && cleaned.length > 0;
}

// Function to perform check
function checkPalindrome() {
  let input = document.getElementById("userInput").value;
  let resultBox = document.getElementById("result");

  if (input.trim() === "") {
    return; // Don't show result if input is empty
  }

  if (isPalindrome(input)) {
    resultBox.textContent = "Yes, it's a palindrome";
    resultBox.style.backgroundColor = "rgba(34, 197, 94, 0.8)"; // green
  } else {
    resultBox.textContent = "Not a palindrome";
    resultBox.style.backgroundColor = "rgba(239, 68, 68, 0.8)"; // red
  }
  
  resultBox.classList.add("show");
}

// Event listener for check button
document.getElementById("checkBtn").addEventListener("click", checkPalindrome);

// Event listener for reset button
document.getElementById("resetBtn").addEventListener("click", function() {
  document.getElementById("userInput").value = "";
  document.getElementById("result").classList.remove("show");
  document.getElementById("userInput").focus();
});

// Event listener for Enter key
document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkPalindrome();
  }
});

// Event listener to hide result box when input is clicked
document.getElementById("userInput").addEventListener("focus", function() {
  document.getElementById("result").classList.remove("show");
});

// Event listener to hide result box when input is empty
document.getElementById("userInput").addEventListener("input", function() {
  if (this.value.trim() === "") {
    document.getElementById("result").classList.remove("show");
  }
});

// Set dynamic copyright year
document.getElementById("copyright").textContent = `© ${new Date().getFullYear()} Palindrome Checker`;
