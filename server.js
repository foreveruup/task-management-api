const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/task_management_api';

// connection to mongodb
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));


process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});

// starting server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT} `)
});
