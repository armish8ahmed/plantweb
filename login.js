var signInButton = document.getElementById('signInButton');
var overlay = document.getElementById('overlay');
var switchToSignUp = document.getElementById('switchToSignUp');
var switchToSignIn = document.getElementById('switchToSignIn');

signInButton.addEventListener('click', function() {
  overlay.classList.add('show');
});

switchToSignUp.addEventListener('click', function() {
  overlay.classList.add('signUp');
});

switchToSignIn.addEventListener('click', function() {
  overlay.classList.remove('signUp');
});


overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.classList.remove('show');
    }
  });
