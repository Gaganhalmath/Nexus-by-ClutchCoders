const mongoose = require('mongoose');

// Define the Message schema
const messageSchema = new mongoose.Schema({
  sender: { 
    type: String, // Storing the username of the sender
    required: true 
  },
  recipient: { 
    type: String, // Storing the username of the recipient
    required: false // Can be null for group messages
  },
  content: { 
    type: String, 
    required: true 
  },
  isGroupMessage: { 
    type: Boolean, 
    default: false 
  },
  sentAt: { 
    type: Date, 
    default: Date.now 
  },
});

// Create and export the Message model
module.exports = mongoose.model('Message', messageSchema);
