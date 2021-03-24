const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const viewerRoutes = require('./routes/viewerRoutes');
const viewerSnapshotRoutes = require('./routes/viewerSnapshotRoutes');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleWare');

const testRoutes = require('./routes/testRoutes');


dotenv.config();

connectDB();

const app = express();

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("api was hit")
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/viewers', viewerRoutes);
app.use('/api/snapshot', viewerSnapshotRoutes);

app.use('/api/test', testRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


app.listen(
PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
