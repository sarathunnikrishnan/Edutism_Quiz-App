const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const edutismModel = require('./mongodb.js')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);

//mongodb connect

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/edutism');
    console.log("database connected...")
}

main().catch((err) => console.log(err))

// Create a new MongoDBStore instance
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/session-store', // MongoDB URI
    collection: 'sessions' // Collection name in which sessions will be stored
});

// Catch errors
store.on('error', function (error) {
    console.error(error);
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'key',
    cookie: { maxAge: 600000 },
    store: store,
    resave: false,
    saveUninitialized: true
}));


app.post('/dataregister', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, birthDate, state, password } = req.body;

    try {
        const user = await edutismModel.findOne({ email: email });

        if (!user) {
            // database code
            edutismModel.create({ firstName, lastName, email, phoneNumber, birthDate, state, password })
                .then(() => {
                    res.json("Successfully");
                })
                .catch((err) => {
                    console.error("Error:", err);
                    res.status(500).json({ error: "An error occurred while saving data" });
                });

        } else {
            return res.json("This Email is already exist"); 
        } 
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json("Internal Server Error"); 
    }
});


app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await edutismModel.findOne({ email: email });

        if (user) {
            if (password === user.password) {
                req.session.loggedIn = true
                req.session.user = user;
                return res.json({ success: true, user: req.session.user });
            } else {
                return res.json("false");
            }
        } else {
            return res.json("No record existed");
        }
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json("Internal Server Error");
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to logout' });
        } else {
            console.log('Session destroyed successfully');
            res.json("Successfully LogOut");
        }
    }); 
    res.json("Successfully LogOut")
})


app.listen(7070, () => {
    console.log('Server is running http://localhost:7070/');
})