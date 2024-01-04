const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');
const connectDB = require('./config/database')
const app = express();

require('dotenv').config({path: './config/.env'})

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'Job'

// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })

connectDB()
// mongoose.connect('../congfigDB_STRING', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use('/jobs', jobRoutes);
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Other middleware and routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
