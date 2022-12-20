import express from 'express'

const app = express()

//routes
//homepage
app.get('/', (req, res) => {
    res.send('home page')
})

//about
app.get('/about', (req, res) => {
    res.send('about page')
})

//signup
app.get('/signup', (req, res) => {
    res.send('you can register here.')
})

//404 error
app.get('*', (req, res) => {
    res.send('404 \n Page not found')
})

app.listen(3000)