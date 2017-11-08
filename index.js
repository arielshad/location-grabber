const express = require('express')
const app = express()
const iplocation = require('iplocation')

app.enable('trust proxy')


const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    next();
};





app.get('/', (req, res) => {
	
	iplocation(req.ip).then(result=>{
		return res.send(result);
	})
	
})



app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
