// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

// Add a new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChats(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err))
});
// Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'fei');

//Get chats and render
chatroom.getChats(data => chatUI.render(data));