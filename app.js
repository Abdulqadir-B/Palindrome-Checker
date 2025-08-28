// Function to check palindrome
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed && cleaned.length > 0;
}

// Event listener for button
document.getElementById("checkBtn").addEventListener("click", function () {
  let input = document.getElementById("userInput").value;
  let resultBox = document.getElementById("result");

  if (isPalindrome(input)) {
    resultBox.textContent = "Yes, it’s a palindrome ✅";
    resultBox.style.backgroundColor = "rgba(34, 197, 94, 0.8)"; // green
  } else if (input.trim() === "") {
    resultBox.textContent = "⚠️ Please enter some text!";
    resultBox.style.backgroundColor = "rgba(234, 179, 8, 0.8)"; // yellow
  } else {
    resultBox.textContent = "Not a palindrome ❌";
    resultBox.style.backgroundColor = "rgba(239, 68, 68, 0.8)"; // red
  }
});
