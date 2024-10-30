const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelleme

  const { email, password } = loginForm.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Alanların doldurulup doldurulmadığını kontrol etme
  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  // Alan değerlerini bir nestneye toplama
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Verileri konsola yazdırma ve formu temizleme
  console.log(formData);
  loginForm.reset();
});

