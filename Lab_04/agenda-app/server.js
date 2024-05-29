// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const AGENDA_DIR = path.join(__dirname, 'agenda');

// Middleware para asegurar que el directorio de agenda existe
if (!fs.existsSync(AGENDA_DIR)) {
    fs.mkdirSync(AGENDA_DIR);
}

// Función auxiliar para formatear la estructura de la agenda
function getAgendaStructure() {
    const agenda = {};
    fs.readdirSync(AGENDA_DIR).forEach(dateDir => {
        const datePath = path.join(AGENDA_DIR, dateDir);
        if (fs.statSync(datePath).isDirectory()) {
            agenda[dateDir] = [];
            fs.readdirSync(datePath).forEach(eventFile => {
                const eventPath = path.join(datePath, eventFile);
                const eventContent = fs.readFileSync(eventPath, 'utf-8');
                const eventTitle = eventContent.split('\n')[0];
                agenda[dateDir].push({ time: eventFile.replace('.txt', ''), title: eventTitle });
            });
        }
    });
    return agenda;
}

// Rutas y lógica de la aplicación

// Home - Mostrar la agenda
app.get('/', (req, res) => {
    const agenda = getAgendaStructure();
    res.render('index', { agenda });
});

// Crear evento
app.post('/create', (req, res) => {
    const { date, time, title, description } = req.body;
    const dateDir = path.join(AGENDA_DIR, date);
    const eventFile = path.join(dateDir, `${time}.txt`);

    if (!fs.existsSync(dateDir)) {
        fs.mkdirSync(dateDir);
    }

    if (!fs.existsSync(eventFile)) {
        fs.writeFileSync(eventFile, `${title}\n${description}`);
        res.redirect('/');
    } else {
        res.send('Evento ya existe');
    }
});

// Editar evento
app.get('/edit/:date/:time', (req, res) => {
    const { date, time } = req.params;
    const eventFile = path.join(AGENDA_DIR, date, `${time}.txt`);
    if (fs.existsSync(eventFile)) {
        const eventContent = fs.readFileSync(eventFile, 'utf-8').split('\n');
        const title = eventContent[0];
        const description = eventContent.slice(1).join('\n');
        res.render('edit', { date, time, title, description });
    } else {
        res.send('Evento no encontrado');
    }
});

app.post('/edit/:date/:time', (req, res) => {
    const { date, time } = req.params;
    const { title, description } = req.body;
    const eventFile = path.join(AGENDA_DIR, date, `${time}.txt`);

    if (fs.existsSync(eventFile)) {
        fs.writeFileSync(eventFile, `${title}\n${description}`);
        res.redirect('/');
    } else {
        res.send('Evento no encontrado');
    }
});

// Eliminar evento
app.post('/delete/:date/:time', (req, res) => {
    const { date, time } = req.params;
    const eventFile = path.join(AGENDA_DIR, date, `${time}.txt`);
    if (fs.existsSync(eventFile)) {
        fs.unlinkSync(eventFile);
        res.redirect('/');
    } else {
        res.send('Evento no encontrado');
    }
});

// Servidor escucha en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
