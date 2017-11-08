const express = require('express')
const app = express()
const iplocation = require('iplocation')

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    next();
};



app.get('/', (req, res) => {
	return iplocation(req.clientIp, function (error, res) {
		return res.country;
	});
	
	
})



app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
