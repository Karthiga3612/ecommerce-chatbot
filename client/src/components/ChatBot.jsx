import React, { useState, useEffect } from 'react';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/messages/all')
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = {
      text: input,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMsg]);
    await fetch('http://localhost:5000/api/messages/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userMsg)
    });

    // Checkout simulation
    if (input.toLowerCase() === 'checkout') {
      const total = cart.reduce((sum, p) => sum + p.price, 0);
      const botMsg = {
        text: `🛒 You have ${cart.length} items in cart. Total: ₹${total}`,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botMsg]);
      setCart([]);
      await fetch('http://localhost:5000/api/messages/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(botMsg)
      });
      setInput('');
      return;
    }

    // Send input as product search
    const res = await fetch(`http://localhost:5000/api/products/search?q=${input}`);
    const products = await res.json();

    const botMsg = {
      text: 'Here are the products:',
      sender: 'bot',
      timestamp: new Date().toISOString(),
      products: products
    };

    setMessages(prev => [...prev, botMsg]);
    await fetch('http://localhost:5000/api/messages/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(botMsg)
    });

    setInput('');
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    const botMsg = {
      text: `✅ Added "${product.name}" to cart.`,
      sender: 'bot',
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, botMsg]);
  };

  const resetChat = () => {
    setMessages([]);
    setCart([]);
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender}>
            <p><strong>{msg.sender.toUpperCase()}:</strong> {msg.text}</p>
            {msg.products && msg.products.length > 0 && (
              <div className="product-grid">
                {msg.products.map(p => (
                  <div className="product-card" key={p._id}>
                    <img src={p.image} alt="error" />
                    <p>{p.name}</p>
                    <p>₹{p.price}</p>
                    <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            )}
            <span className="time">{new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Search or type 'checkout'..."
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={resetChat}>Reset</button>
      </div>
    </div>
  );
}

export default ChatBot;
