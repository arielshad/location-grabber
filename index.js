const express = require('express')
const app = express()
const iplocation = require('iplocation')
const fs = require('fs');
const path = require('path')
const serveIndex = require('serve-index')


app.enable('trust proxy')

// app.use(express.directory(path.join(__dirname, 'locations')));
// app.use('/static', express.static(path.join(__dirname, 'locations')))

app.use('/ftp', express.static('./locations'), serveIndex('./locations', {'icons': true}))


const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    next();
};





app.get('/', (req, res) => {
	
	iplocation(req.ip).then(result=>{
		fs.writeFileSync(`./locations/${+new Date}.json`, JSON.stringify(result,null, 3));
		return res.sendStatus(200);
	})
	
})



app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
