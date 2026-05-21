const fetch = require('node-fetch')

exports.handler = async function(event, context) {
  try {
    const body = event.body ? JSON.parse(event.body) : {}
    const apiKey = process.env.GEMINI_API_KEY
    if(!apiKey) return { statusCode: 500, body: JSON.stringify({ error: 'GEMINI_API_KEY not configured' }) }

    const resp = await fetch('https://api.example-gemini.com/v1/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify(body)
    })

    const data = await resp.json()
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) }
  }
}
