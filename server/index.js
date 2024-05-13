const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors());
app.use(express.json());

const names = ['Ревущий кабан', 'Большой тигр', 'Сверх сурок', 'Праведный лев', 'Архи павлин'];
const savedNames = [];

app.get('/api/names', (req, res) => {
    const randomIndex = Math.floor(Math.random() * names.length);
    res.json({ name: names[randomIndex] });
});

app.post('/api/savenames', (req, res) => {
    const { name } = req.body;
    if (name) {
        savedNames.push(name); 
        res.status(200).json({ message: 'Nickname saved successfully' });
    } else {
        res.status(400).json({ error: 'Invalid request: No nickname provided' });
    }
});

app.get('/api/savenames', (req, res) => {
    res.status(200).json({ savedNames });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
