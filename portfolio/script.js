// Simple contact form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        alert("Thanks for your message! I’ll get back to you soon.");
        this.reset(); // clear form
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    })
    .catch(error => {
      alert("Error submitting the form.");
    });
  });

const roles = ["a Developer.", "a Designer.", "an Engineer."];
let i = 0, j = 0, current = "";
setInterval(() => {
  current = roles[i];
  document.getElementById("typing-text").textContent = current.slice(0, j++);
  if (j > current.length) { j = 0; i = (i + 1) % roles.length; }
}, 200);
