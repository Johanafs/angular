const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');
 
//settings
app.set('port', process.env.PORT || 3000 );


//middelwears
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use('/api/usuarios',require('./routes/usuarios.routes'));

//iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('servidor en puerto', app.get('port'));
});