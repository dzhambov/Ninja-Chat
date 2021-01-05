// Add new chat documents
// Setting up a real-time listener to get new chats
// Updating the username
// Updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
  }

  async addChats(message) {
    // Format a chat objectc
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    // Save the chat document
    const response = await this.chats.add(chat);
    return response;
  }
}

const chatroom = new Chatroom('gaming','fei');

chatroom.addChats('hello gang')
.then(() => console.log('chat added'))
.catch(err => console.log('err'));