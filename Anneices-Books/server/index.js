import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import books from './books.js';
import pretty from 'express-prettify'

const app = express();
const PORT = 5050;

const __dirname = path.resolve();

//Adding middleware
app.use(cors());

app.use(pretty({query: 'pretty'}));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static('client'));

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookID', cors(), async (req, res) => {
    let requestedBook = req.params.bookID;
    for (let book of books) {
        if(book.isbn === requestedBook) {
            res.json(book);
        }
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});


app.listen(PORT, () => console.log(`Hi Anneice! Server is running on port ${PORT}`));