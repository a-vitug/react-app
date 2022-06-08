const mongoose = require('mongoose');
// 'mongodb+srv://noteful-app:notefulclone123@noteful-app.fthcj.mongodb.net/test'
mongoose.connect( 'mongodb://localhost/noteFullDB',
    process.env.MONGO_URI || 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
// 'mongodb+srv://noteful-app:notefulclone123@noteful-app.fthcj.mongodb.net/test'

module.exports = mongoose.connection;