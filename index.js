const express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.post('/test', (req, res) => {
    let str = req.body.string_to_cut
    let output = '';
    for (let i = 2; i < str.length; i += 3) {
        output += str[i]
    }
    //can opt to use res.send/end depending on situation
    console.log(output)
    res.json({ "return_string": output })

})

app.listen(3000, function() {
    console.log('listening on port 3000!');
});