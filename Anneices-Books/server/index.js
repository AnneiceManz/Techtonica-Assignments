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

app.post('/books/', (request, response) => {
    // store request body in variable
    let body = request.body; 

    const newBookObj = {
        "isbn": body.isbn,
        "title": body.title,
        "author": body.author,
        "format": body.format,
        "pages": body.pages
    }
    booklist.push(newBookObj);
    return response.json(books);
});

app.put('api/books/:ID', (request, response) => {
    // store isbn in variable 
    let bookISBN = request.params.ID;
        
    // store request body in variable
    let body = request.body; 
    
    //iterate through booklist to find the book with the matching isbn 
    for(let i = 0; i < books.length; i++) {
        // find the book to update
        if(books[i]['isbn'] == bookISBN) {
            console.log("i am in here");
            booklist[i]['title'] = body.title;
            booklist[i]['isbn'] = body.isbn;
            booklist[i]['author'] = body.author,
            booklist[i]['publisher'] = body.publisher
            return response.json(books);
        }
    }
        // the book was not found message 
        return response.status(400).send(`The Book ISBN (${bookISBN}) you tried looking for was not found`);
    });




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../client/index.html'));
});


app.listen(PORT, () => console.log(`Hi Anneice! Server is running on port ${PORT}`));