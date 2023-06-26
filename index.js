function getPassword() {
  const lengthInput = document.getElementById('passwordLength');
  const length = parseInt(lengthInput.value);

  if (length <= 0 || isNaN(length)) {
    alert('Please enter a valid password length!');
    return;
  }

  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  const passwordInput = document.getElementById('password');
  passwordInput.value = password;
}

function savePassword() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value;

  if (!password) {
    alert('No password to save!');
    return;
  }

  localStorage.setItem('savedPassword', password);
  console.log('Password saved:', password);
}
