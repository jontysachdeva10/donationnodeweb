const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
const db = "mongodb+srv://jonty_sachdeva:jon@1234@cluster0.yj85i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Mongo DB connected..');
    } catch (error: any) {
        console.error(error.message);
        // Exit process with failure
        process.exit(1);
    }
}

export { connectDB };
    