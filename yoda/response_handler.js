// Declaring variables that you may want to use.
let names = ['cute', 'regular'];
let moods = ['dark', 'force', 'std'];

const chat_textbox = document.getElementById("chat_response");
chat_textbox

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];


function respond() {
    // Your Code Here
    var chat_response = document.getElementById("chat_response").value;
    img_name = "";
    img_mood = "";
    yoda_text = "";
    
    if (chat_response.includes("force")) {
        if (chat_response.includes("dark")) {
            img_mood = "dark";
            yoda_text = dark_quotes[Math.floor(Math.random() * dark_quotes.length)]
        }
        else {
            img_mood = "force"
            yoda_text = force_quotes[Math.floor(Math.random() * force_quotes.length)]
        }
    } else {
        img_mood = "std"
        yoda_text = std_quotes[Math.floor(Math.random() * std_quotes.length)]
    }
    
    
    if (chat_response.includes("cute") || chat_response.includes("baby")) {
        img_name = "cute";
        if (chat_response.includes("dark"))
        mood_index = Math.floor(Math.random() * 3);
        yoda_text = "Yes, h" + "m".repeat(Math.floor((Math.random()+1)*10)) + "."
        
    }
    else {
        img_name = "regular"
    }
    
    img = img_name + '-' + img_mood + '.jpg';
    document.getElementById("yoda_img").setAttribute("src", "img/" + img);
    document.getElementById("yoda_response").innerHTML = yoda_text;
    document.getElementById("chat_response").value = '';
}