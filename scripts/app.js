// DOM queries
const chatList = document.querySelector('.chat-list');

// Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'fei');

//Get chats and render
chatroom.getChats(data => chatUI.render(data));