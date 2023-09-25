const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const adminRouter = require(path.join(__dirname, 'routes', 'admin'));
const userRouter = require(path.join(__dirname, 'routes', 'user'));


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/',userRouter);






app.listen(port ,() => {
    console.log(`app listening at ${port}`)
})
