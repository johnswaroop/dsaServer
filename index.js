const Express = require('express');
const Mongoose = require('mongoose');
const app = Express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


Mongoose.connect('mongodb+srv://dsadb:dsadb@dsa.wzne0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('db connected')
});


const qstatSchema = new Mongoose.Schema({
    qid: String,
    completed: Boolean,
    difficulty: Number,
    Date: String
})

const qstat = Mongoose.model('qstat', qstatSchema);

let entry = new qstat({
    qid: 'test',
    completed: false
})

entry.save((err, res) => {
    console.log(res);
})


app.get('/', (req, res) => {

    res.send("connected");

})



app.listen(process.env.PORT || 5000, () => {
    console.log("listening");
})