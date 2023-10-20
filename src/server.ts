// src/server.ts

import express from 'express';

const server = express();
const PORT = 3080;

server.get('/', (req, res) => {
    res.send('Hello from TypeScript backend!');
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});