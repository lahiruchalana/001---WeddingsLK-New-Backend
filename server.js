import express from 'express';
import mongoose from 'mongoose';
// import Pusher from 'pusher';
import Cors from 'cors';
import bodyParser from 'body-parser';


//////start of Router setting (often what we change here)

import VendorModel from './models/vendor.js';
import userRouter from "./routes/user.js";
import postRoutes from './routes/feedbacks.js';


/////end of Router setting (often what we change here)


// app configuration
const app = express();
const port = process.env.PORT || 8001;

// API endpoint
app.get('/', (req, res) => res.status(200).send("Success, you are in WeddingsLK"));

// listner
app.listen(port, () => console.log(`listening on localhost: ${port}`));

// DB configuration
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => (
    console.log('DB Connected')
))

mongoose.set('useFindAndModify', false);

// middlewares
app.use(express.json());
app.use(Cors());

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


//////start of Router setting (often what we change here
app.use("/user", userRouter);
app.use('/posts', postRoutes);

