// script.js

const socket = io();

// Join chat event
const joinBtn = document.getElementById('join-btn');
const usernameInput = document.getElementById('username');
const userList = document.getElementById('user-list');
const messageInput = document.getElementById('message-input');
const sendMessageBtn = document.getElementById('send-message-btn');
const messagesDiv = document.getElementById('messages');

// Join the chat with username
joinBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) {
    socket.emit('join', username);
  } else {
    alert('Please enter a username');
  }
});

// Handle successful join
socket.on('welcome', (data) => {
  console.log(data.message);
  alert(data.message);
  // Display user info
  const userDetails = data.userDetails;
  messagesDiv.innerHTML = `<p>Welcome, ${userDetails.username}! You joined at ${userDetails.createdAt}</p>`;
});

// Handle error (e.g., user not found)
socket.on('error', (error) => {
  alert(error);
});

// Handle user list updates
socket.on('user-list', (users) => {
  userList.innerHTML = `<h3>Active Users</h3><ul>${users.map(user => `<li>${user}</li>`).join('')}</ul>`;
});

// Handle receiving private messages
socket.on('private-message', (data) => {
  messagesDiv.innerHTML += `<p><strong>${data.from}:</strong> ${data.message}</p>`;
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
});

// Send private message
sendMessageBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  const recipient = prompt("Enter recipient's username:");
  if (message && recipient) {
    socket.emit('private-message', { to: recipient, message });
    messageInput.value = ''; // Clear message input
  } else {
    alert('Please enter a message and recipient');
  }
});
