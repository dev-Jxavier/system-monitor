import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import * as dotenv from 'dotenv';
import stats from './systemInfos';
dotenv.config();

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '../public'));

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    setInterval(() => {
        socket.emit('infoSystem', stats());
    }, 1000);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.route('/').get((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/public/index.html');
});

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
