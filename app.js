import express from 'express'

const app = express()

// set template engine and specify extension
app.set('view engine', 'ejs')

// source for static files
app.use(express.static('public'))

//routes

//homepage
app.get('/', (req, res) => {
    res.render('index', {title: 'Hello world - from backend'})
})

//about
app.get('/about', (req, res) => {
    const languages = ['Go', 'Java', 'Rust', 'C++', 'Python', 'JavaScript']
    res.render('about', {languages})
})

//signup
app.get('/signup', (req, res) => {
    res.render('signup')
})

//404 error
app.get('*', (req, res) => {
    res.render('404')
})

app.listen(3000)