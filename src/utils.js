export function loggedIn() {
  return localStorage.getItem('token') !== null;
}

export function loggedToken() {
  return localStorage.getItem('token');
}

export function login(token) {
  localStorage.setItem('token', token)
}

export function logout() {
  localStorage.removeItem('token')
}
