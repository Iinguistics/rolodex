const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleWare');


dotenv.config();

connectDB();

const app = express();

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("api was hit")
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


app.listen(
PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
