const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productsRoute = require('./routes/products');
const messagesRoute = require('./routes/messages');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/uplyftdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ Mongo error:', err));

app.use('/api/products', productsRoute);
app.use('/api/messages', messagesRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
