const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');
//Middleware function to log request protocol
function isWorkingHour() {
    const now = new Date()
    return now.getDay() !== 0 && now.getDay() !== 6 && now.getHours() >= 9 && now.getHours() < 17;
}
app.use(function(req, res, next){
   if(isWorkingHour()){
       next();
   }
   else{
       console.log("outside of work time");
       res.render('outside');
   }
});



app.get('/', function(req, res){
    res.render('home',{page:"home"});
});
app.get('/services', function(req, res){
    res.render('services',{page:"services"});
});
app.get('/contact', function(req, res){
    res.render('contact',{page:"contact"});
});

app.listen(4000);