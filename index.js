import express from 'express';
import fsp from 'fs'
import rangeofNumbers from "./functions.js";
import insertDash from "./dash.js";
const app = express();
app.use(express.json());
const hostname = '127.0.0.1';
const port = 3000;


app.get('/range', async (req, res) => {
    const array = JSON.parse(req.query.numbers);
    const firstNumber = Number(array[0]);
    const lastNumber = Number(array[1]);
    const range = rangeofNumbers(firstNumber, lastNumber);
    await fsp.writeFile('log.json', rangeofNumbers)
    res.status(200);
    res.json(range);
    
    
});


app.get('/dash', async (req, res) => {
    const { string }= req.query;
    const dash_inserted = await insertDash(string);
    await fsp.writeFile('log.json', dash_inserted)
    res.status(200);
    res.json(dash_inserted);
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
