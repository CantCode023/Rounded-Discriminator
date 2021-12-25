const express = require('express');
const app = express();
const port = 8080

// Load CSS
app.use('/css', express.static('public/css'))
// Load JS
app.use('/js', express.static('public/js'))

// Load EJS Engine
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render("index")
})

// Main Function to round discriminator
function roundDisc(disc) {
    var disc = disc
    let a = []

    for (var i=0; i<disc.length; i++) {
        a.push(i)
    }

    for (var i=0; i<a.length; i++) {
        i = a[i]
        if (disc[i] == "0") {
            if (i == disc.length-1) {
                if (disc[i-1] == "0") {
                    disc = disc
                }
                else if (disc[0] != "0") {
                    disc = disc
                }
                else {
                    disc = disc.slice(0,i)
                }
            }
            else if (i == 0) {
                if (disc[-1] == "0") {}
                else {
                    disc = disc.slice(i+1)
                }
            }
        }
    }
    return disc
}

app.get('/round', function(req, res) {
    let discriminator = req.query.disc
    const a = roundDisc(discriminator)
    res.send(a)
})

app.listen(port, function() {
    console.log(`Running on port ${port}!`)
})