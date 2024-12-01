const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/view/index.html'));
});

app.use(express.static(path.join(__dirname, '/public')));
//add the router
app.use('/', router);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));