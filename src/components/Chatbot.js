function displayMessage(message, isAnswer) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
  
    const messageText = document.createElement('p');
    messageText.textContent = message;
  
    if (isAnswer) {
      messageElement.classList.add('answer');  // Add class to control the animation delay for the answer
    }
  
    messageElement.appendChild(messageText);
    document.querySelector('.chatbot-content').appendChild(messageElement);
    
    // Apply the typing effect with delay for answers
    if (isAnswer) {
      setTimeout(() => {
        messageElement.querySelector('p').style.animation = 'typing 2s steps(30) forwards';
      }, 3000); // Delay the answer after the question
    }
  }
  