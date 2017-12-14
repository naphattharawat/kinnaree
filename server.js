const express = require('express')
const http = require('http')
const path = require('path')


const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
})
const port = process.env.port || 3001
app.set('port',port)

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on ${ port }`))
// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(port, () => console.log(`Listening on ${ port }`))
