const apiKey = process.env.API_KEY; 

const url = 'https://api.openai.com/v1/completions';

export default fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
        'model': 'text-davinci-003',
        'prompt': 'What is the capital of Spain?'
    })
}).then(response => response.json()).then(data => console.log(data));
