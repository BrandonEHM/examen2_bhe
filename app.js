const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cors = require('cors');
const puerto = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extenden : true}));
app.use(bodyParser.json())

//Definir rutas: login, categorias, index y Not Found
//GETS o POST

app.get('/',(req,res)=>{
    res.render('index');    
})

app.get('/login',(req,res)=>{
    res.render('signin-one');
})

app.get('/categorias',(req,res)=>{
    res.render('datatables-advanced');    
})

app.get('/invoice_add',(req,res)=>{
    res.render('apps-invoice-add');    
})
app.get('/invoice_edit',(req,res)=>{
    res.render('apps-invoice-edit');    
})
app.get('/invoice_list',(req,res)=>{
    res.render('apps-invoice-list');    
})
app.get('/invoice_preview',(req,res)=>{
    res.render('apps-invoice-preview');    
})

app.get('/todolist',(req,res)=>{
    res.render('apps-todolist');    
})




app.get('*',(req,res)=>{
    res.render('pages-error-404');
})

//Definir puerto en que se escuchan solicitudes
app.listen(puerto,()=>{
    console.log('El servidor esta corriendo en el puero: ' ,puerto);    
})