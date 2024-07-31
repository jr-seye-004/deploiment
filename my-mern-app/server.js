const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
const uri = "mongodb+srv:seyeyoussoupha4:JUNI0RS3Y3@mern.hk0d5bk.mongodb.net/?retryWrites=true&w=majority&appName=MERN";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
const preschoolRoutes = require('./routes/preschools');
app.use('/api', preschoolRoutes);

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
