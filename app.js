const express = require('express');
const session = require('express-session');
//const axios = require('axios');
const bodyParser = require('body-parser');
const { engine } = require ('express-handlebars');
const app = express();

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set("views", "./views");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

    app.get('/', (req, res) => {
      res.render('home');
});

app.use(session({
  secret: 'sua_chave_secreta', // Guarde isto em segurança!
  resave: false,
  saveUninitialized: true
}));


app.post('/login', (req, res) => {
const { username, password } = req.body;

// Verifique as credenciais (isso é apenas um exemplo simplificado)
if (username === 'admin' && password === 'admin') {
  req.session.loggedIn = true;

  res.render('home', { username });
} else {
  res.send('Credenciais inválidas');
}
});

// Rota de logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
app.get('/home', (req, res) => {
  const { username, password } = req.body;
  if (req.session.loggedIn) {
  res.render('home', { username });
  }else{
    res.render('login');
  }
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/sobrenos', (req, res) => {

  if (req.session.loggedIn) {
    res.render('sobrenos');
    }else{
      res.render('login');
    }
});
app.get('/filias', (req, res) => {
  
  if (req.session.loggedIn) {
    res.render('filias');
    }else{
      res.render('login');
    }
});
app.get('/contato', (req, res) => {
  
  if (req.session.loggedIn) {
    res.render('contato');
    }else{
      res.render('login');
    }
});
    app.get('/java.js', (req, res) => {
    res.sendFile(__dirname + '/java.js');
  });
  app.get('/java4.js', (req, res) => {
    res.sendFile(__dirname + '/java4.js');
  });
  app.get('/map.js', (req, res) => {
    res.sendFile(__dirname + '/map.js');
  });

  app.get('/transporte5.jpg', (req, res) => {
    res.sendFile(__dirname + '/imagens/transporte5.jpg');
  });
  app.get('/transporte4.jpg', (req, res) => {
    res.sendFile(__dirname + '/imagens/transporte4.jpg');
  });
  app.get('/transporte3.jpg', (req, res) => {
    res.sendFile(__dirname + '/imagens/transporte3.jpg');
  });
  app.get('/stylehome.css', (req, res) => {
    res.sendFile(__dirname + '/stylehome.css');
  });
  app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/styles.css');
  });
  app.get('/stylel.css', (req, res) => {
    res.sendFile(__dirname + '/stylel.css');
  });
  app.get('/stylef.css', (req, res) => {
    res.sendFile(__dirname + '/stylef.css');
  });
  app.get('/stylec.css', (req, res) => {
    res.sendFile(__dirname + '/stylec.css');
  });
  app.get('/map2.jpg', (req, res) => {
    res.sendFile(__dirname + '/imagens/map2.jpg');
  });
  app.get('/sacolas.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/sacolas.png');
  });
  app.get('/ciclo.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/ciclo.png');
  });
  app.get('/ecommerce.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/ecommerce.png');
  });
  app.get('/entrega_expressa.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/entrega_expressa.png');
  });
  app.get('/transporte_de_carga.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/transporte_de_carga.png');
  });
  app.get('/imagens/instagram_logo.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/instagram_logo.png');
  });
  app.get('/imagens/facebook_logo.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/facebook_logo.png');
  });
  app.get('/imagens/twitter_logo.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/twitter_logo.png');
  });
  app.get('/imagens/sobrenos1.jpg', (req, res) => {
    res.sendFile(__dirname + '/imagens/sobrenos1.jpg');
  });
  app.get('/imagens/nossamotivacao1.jpg', (req, res) => {
    res.sendFile(__dirname + '/imagens/nossamotivacao1.jpg');
  });
  app.get('/imagens/logo_usuario.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/logo_usuario.png');
  });  
  app.get('/imagens/fundo_formulario_1920.png', (req, res) => {
    res.sendFile(__dirname + '/imagens/fundo_formulario_1920.png');
  });  
  
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});