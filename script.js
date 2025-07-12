function login() {
  const name = document.getElementById('name').value;
  if (name) {
    localStorage.setItem('username', name);
    window.location.href = 'dashboard.html';
  }
}