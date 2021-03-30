const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const viewerRoutes = require('./routes/viewerRoutes');
const viewerSnapshotRoutes = require('./routes/viewerSnapshotRoutes');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware'); //for some odd reason putting the correct path of MiddleWare breaks heroku
const twitchDataRoutes = require('./routes/twitchDataRoutes');


dotenv.config();

connectDB();

const app = express();

app.use(express.json())



app.use('/api/users', userRoutes);
app.use('/api/viewers', viewerRoutes);
app.use('/api/snapshot', viewerSnapshotRoutes);
app.use('/api/twitchdata', twitchDataRoutes);




var __dirname = path.resolve();

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}else{
    app.get("/", (req,res)=>{
        res.send("api was hit")
    });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


app.listen(
PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
