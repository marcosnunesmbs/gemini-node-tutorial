require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//json response

app.post('/ask', async (req, res) => {
    const userMessage = req.body.message;
    const temperature = parseFloat(req.body.temperature);
    const structuredPrompt = `${userMessage}\n\nPor favor, responda formatando sua resposta como um objeto JSON com as chaves "resposta" (responsta completa), "resumo" (resposta curta) e "palavras_chave".`;
    const generationConfig = {
        temperature: temperature,
        response_mime_type: "application/json"
    };
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash', generationConfig: generationConfig});
    
    try {
        const result = await model.generateContent(structuredPrompt);
        
        const responseText = result.response.text();
        try {
            const jsonResponse = JSON.parse(responseText);
            res.json({ reply: jsonResponse });
        } catch (error) {
            console.warn('A resposta não pôde ser retornada como JSON:', responseText);
            res.json({ reply: responseText });
        }
    } catch (error) {
        console.error('Erro ao chamar a API do Gemini:', error);
        res.status(500).json({ error: 'Erro ao obter resposta do Gemini.' });
    }
});

//test response

// app.post('/ask', async (req, res) => {
//     const userMessage = req.body.message;

//     const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash'});

//     try {
//         const result = await model.generateContent(userMessage);
//         const responseText = result.response.candidates[0].content.parts[0].text;
//         res.json({ reply: responseText });
//     } catch (error) {
//         console.error('Erro ao chamar a API do Gemini:', error);
//         res.status(500).json({ error: 'Erro ao obter resposta do Gemini.' });
//     }
// });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});