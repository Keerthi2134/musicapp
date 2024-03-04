const GEMINI_API_KEY = 'AIzaSyAKZ3qsbHowI9ooxZMKA3BzeCIW9R1xMQU'; // Your Gemini API key

async function fetchMusicSnippet(prompt) {
    const url = 'https://esm.run/@google/generative-ai'; // Replace with actual Gemini API endpoint
    const body = JSON.stringify({ prompt });

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AIzaSyAKZ3qsbHowI9ooxZMKA3BzeCIW9R1xMQU}` // Include your API key in the Authorization header
        },
        body: body
    });

    if (!response.ok) {
        throw new Error('Failed to generate music snippet');
    }

    const data = await response.json();
    return data.musicSnippet;
}
