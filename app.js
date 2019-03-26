const express = require('express'); // Para usar la librería de Express que estará en node_modules
const hbs = require('hbs');
const PORT = 3000; // Puerto habitual de Express JS

const app = express(); // Se llama habitualmente 'app' a la aplicación
app.set('view engine', 'hbs'); // Sistema de plantillas (html) automático
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials')

app.get( '/', (req, res, next) => {
  //res.send( 'Hola Mundo!!!' );
  //res.send( '<h1>Hola Mundo!!!</h1>' );
  //res.sendFile(__dirname + '/views/home.html');
  res.render( 'home', { 
    title: 'Home',
    name: 'David'
  } );
} )

app.get( '/films', (req, res, next) => {
  const films = [ { title: 'One' }, { title: 'Two' } ];
  res.render( 'films', { films } );
} )

app.use( (req, res, next) => {
  res.send('<h2>404 NOT FOUND</h2>');
} )

app.listen( PORT, () => console.info( `Application listen at port ${PORT}` ) );
