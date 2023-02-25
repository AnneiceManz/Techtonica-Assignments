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
    return res.json(books);
});



app.get('/api/books/:bookID', cors(), async (req, res) => {
    let requestedBook = req.params.bookID;
    for (let book of books) {
        if(book.isbn === requestedBook) {
            return res.json(book);
        }
    }
});

app.post('/api/books', (req, res) => {
    // store request body in variable
    let body = req.body; 

    const newBookObj = {
        "isbn": body.isbn,
        "title": body.title,
        "author": body.author,
        "format": body.format,
        "pages": body.pages
    }
    books.push(newBookObj);
    return res.json(books);
});

app.put('api/books/:ID', (req, res) => {
    // store isbn in variable 
    let bookISBN = req.params.ID;
        
    // store request body in variable
    let body = req.body; 
    
    //iterate through booklist to find the book with the matching isbn 
    for(let i = 0; i < books.length; i++) {
        // find the book to update
        if(books[i]['isbn'] == bookISBN) {
            console.log("i am in here");
            books[i]['isbn'] = body.isbn;
            books[i]['title'] = body.title;
            books[i]['author'] = body.author,
            books[i]['format'] = body.format,
            books[i]['pages'] = body.pages
            return res.json(books);
        }
    }
        // the book was not found message 
        return res.status(400).send(`The Book ISBN (${bookISBN}) you tried looking for was not found`);
    });

    app.delete('/api/books/:ID', (req, res) => {
        // store isbn in a variable 
        let bookISBN = req.params.ID;
    
        //iterate through booklist to find the book with the matching isbn 
        for(let i = 0; i < books.length; i++) {
            if(books[i].isbn == bookISBN) {
                let deletedBook = books[i];
                books.splice(i, 1);
                // response.json(booklist); 
                return res.send(`The book that was deleted was: ${deletedBook.title} by ${deletedBook.author}.`);
            }
        }
        return res.status(400).send(`The Book ISBN (${bookISBN}) you tried looking for was not found`);
    })


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../client/index.html'));
});


app.listen(PORT, () => console.log(`Hi Anneice! Server is running on port ${PORT}`));