function speak(text) {
    let synth = window.speechSynthesis;
    let voices = synth.getVoices();
    // Try to find an Indian female voice
    let selectedVoice = voices.find(voice =>
        (voice.lang === "hi-IN" || voice.lang === "en-IN") &&
        (voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("woman") || voice.name.toLowerCase().includes("girl"))
    );
    // Fallback to any Indian voice
    if (!selectedVoice) {
        selectedVoice = voices.find(voice =>
            (voice.lang === "hi-IN" || voice.lang === "en-IN")
        );
    }
    // Fallback to any female voice
    if (!selectedVoice) {
        selectedVoice = voices.find(voice =>
            voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("woman") || voice.name.toLowerCase().includes("girl")
        );
    }
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1.15;
    text_speak.volume = 1;
    text_speak.lang = selectedVoice ? selectedVoice.lang : "en-IN";
    if (selectedVoice) text_speak.voice = selectedVoice;
    synth.speak(text_speak);
}

// ...existing code...

function takecommand(Message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    if (
        Message.includes("hello") ||
        Message.includes("hey") ||
        Message.includes("hi")
    ) {
        speak("Namaste! How can I help you today?");
    } else if (
        Message.includes("who are you") ||
        Message.includes("what are you") ||
        Message.includes("tum kaun ho")
    ) {
        speak("I am Shifra, your smart AI assistant, created by Shubhraj. Ask me anything!");
    } else if (
        Message.includes("what is your name") ||
        Message.includes("your name is") ||
        Message.includes("tumhara naam kya hai")
    ) {
        speak("My name is Shifra. I am here to help you anytime.");
    } else if (
        Message.includes("how are you") ||
        Message.includes("how are you doing") ||
        Message.includes("tum kaise ho")
    ) {
        speak("I'm always happy to help! How can I assist you today?");
    } else if (
        Message.includes("i love you") ||
        Message.includes("i also love you very much")
    ) {
        speak(" i also love you very much ,but Aww, that's sweet! I'm here to make your day better.");
    } else if (Message.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank");
        speak("Opening YouTube for you.");
    } else if (Message.includes("open google")) {
        window.open("https://www.google.com", "_blank");
        speak("Opening Google for you.");
    } else if (Message.includes("open facebook")) {
        window.open("https://www.facebook.com", "_blank");
        speak("Opening Facebook for you.");
    } else if (Message.includes("open instagram")) {
        window.open("https://www.instagram.com", "_blank");
        speak("Opening Instagram for you.");
    } else if (Message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Opening WhatsApp for you.");
    } else if (Message.includes("open twitter")) {
        window.open("https://www.twitter.com", "_blank");
        speak("Opening Twitter for you.");
    } else if (Message.includes("open linkedin")) {
        window.open("https://www.linkedin.com", "_blank");
        speak("Opening LinkedIn for you.");
    } else if (Message.includes("open github")) {
        window.open("https://www.github.com", "_blank");
        speak("Opening GitHub for you.");
    } else if (Message.includes("open stackoverflow")) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Opening Stack Overflow for you.");
    } else if (Message.includes("open reddit")) {
        window.open("https://www.reddit.com", "_blank");
        speak("Opening Reddit for you.");
    } else if (Message.includes("open quora")) {
        window.open("https://www.quora.com", "_blank");
        speak("Opening Quora for you.");
    } else if (Message.includes("open gmail")) {
        window.open("https://mail.google.com", "_blank");
        speak("Opening Gmail for you.");
    } else if (Message.includes("open outlook")) {
        window.open("https://outlook.live.com", "_blank");
        speak("Opening Outlook for you.");
    } else if (Message.includes("open news")) {
        window.open("https://news.google.com", "_blank");
        speak("Opening news for you.");
    } else if (
        Message.includes("what is the time") ||
        Message.includes("tell me the time") ||
        Message.includes("abhi kitne baje hain") ||
        Message.includes("kitna time hua hai")
    ) {
        let time = new Date().toLocaleTimeString();
        speak(`The current time is ${time}`);
    } else if (
        Message.includes("what is the date") ||
        Message.includes("tell me the date") ||
        Message.includes("aaj ki tarikh kya hai") ||
        Message.includes("aaj kya hai")
    ) {
        let date = new Date().toLocaleDateString();
        speak(`Today's date is ${date}`);
    } else if (
        Message.includes("what is the day today") ||
        Message.includes("aaj kaun sa din hai") ||
        Message.includes("aaj ka din kya hai")
    ) {
        let day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        speak(`Today is ${day}`);
    } else if (
        Message.includes("thank you") ||
        Message.includes("thanks")
    ) {
        speak("You're welcome! If you need anything else, just let me know.");
    } else if (
        Message.includes("goodbye") ||
        Message.includes("bye") ||
        Message.includes("see you later")
    ) {
        speak("Goodbye! Have a wonderful day ahead.");
    } else if (
        Message.includes("SHUBHRAJ kaun hai")
    ) {
        speak("Shubhraj is my creator, a talented developer. I am here to help you on his behalf.");
    } else if (
        Message.includes("play music") ||
        Message.includes("play a song") ||
        Message.includes("mujhe music sunao")
    ) {
        window.open("https://www.youtube.com/results?search_query=music", "_blank");
        speak("Playing some music for you.");
    } else if (
        Message.includes("tumhe kaun banaya hai")
    ) {
        speak("Mujhe Shubhraj ne banaya hai.");
    } else if (
        Message.includes("tell me a joke") ||
        Message.includes("joke sunao")
    ) {
        const jokes = [
            "Why did the computer go to the doctor? Because it had a virus!",
            "Why do programmers prefer dark mode? Because light attracts bugs!",
            "Why was the math book sad? Because it had too many problems.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why don't scientists trust atoms? Because they make up everything!"
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
    } else if (
        Message.match(/(\d+)\s*[\+\-\*\/]\s*(\d+)/)
    ) {
        // Simple math solver
        try {
            let result = eval(Message.match(/(\d+)\s*[\+\-\*\/]\s*(\d+)/)[0]);
            speak(`The answer is ${result}`);
        } catch {
            speak("Sorry, I couldn't calculate that.");
        }
    } else if (
        Message.includes("weather") ||
        Message.includes("mausam")
    ) {
        // Try to extract city from the message
        let cityMatch = Message.match(/weather in ([a-zA-Z\s]+)/i) || Message.match(/mausam ([a-zA-Z\s]+)/i);
        let city = cityMatch ? cityMatch[1].trim() : "your city";
        window.open(`https://www.google.com/search?q=weather+${encodeURIComponent(city)}`, "_blank");
        speak(`Here is the live weather update for ${city}.`);
    } else {
        // Smart fallback: search on Google and respond naturally
        let searchQuery = Message.replace(/shifra|shipra/gi, "");
        let finalText = `Let me find the answer for "${searchQuery}" on Google.`;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
    }
}