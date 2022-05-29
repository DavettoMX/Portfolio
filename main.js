var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

/* Projects */
CD_OpenCV = "https://github.com/DavettoMX/Color-Detection-Using-OpenCV"
PlaylistFlask = "https://github.com/DavettoMX/Playlist-Flask"
GolangCLI = "https://github.com/DavettoMX/GolangCLI"
NY_Collisions = "https://share.streamlit.io/davettomx/ny-collitions/main/app.py"
Chatbot = "https://github.com/DavettoMX/chatbot"
GUI_Calculator = "https://github.com/DavettoMX/PythonCalculator"

/* Social Media */
var linkedin = "https://www.linkedin.com/in/joshue-garcia-2805361a8/";
var github = "https://github.com/DavettoMX";
var email = "joshrgarb@gmail.com";

/* COMMANDS */

about = [
    "<br>",
    "Hey, I'm <span class=\"command\">Josh!</span>",
    "I'm a 22 years old <span class=\"command\">Python and GO developer</span>, with great passion for <span class=\"command\">Data Science</span>.",
    "I'm a student at the <span class=\"command\">Tecnológico Nacional de México</span>.",
    "I'm a huge fan of the GO language, and I'm also a huge fan of the Python language. And also I'm a huge fan of the Data Science.",
    "As well I'm a huge fan of the Machine Learning and Artificial Intelligence.",
    "But I also have a \"life\" outside codign. I'm a <span class=\"command\">gamer</span>, and I'm a big fan of <span class=\"command\">Star Wars</span> and the <span class=\"command\">Marvel Cinematic Universe</span>. (Yeah, I know, I'm a little bit of a nerd.)",
    "Also i love to play videogames as <span class=\"command\">\"League of Legends\", \"Overwatch\", \"Counter Stringe\", \"Minecraft\", \"Call Of Duty\"</span>, and <span class=\"command\">\"LEGO Games\"</span> I love lego games.",
    "<br>",
]

social = [
    "<br>",
    "<span class=\"command\">My LinkedIn: </span>" + linkedin,
    "<span class=\"command\">My Github: </span>" + github,
    "<span class=\"command\">My Email: </span>" + email,
    "<br>",
]

projects = [
    "<br>",
    "I have a lot of projects in the kitchen, but I'll let here projects I have do.",
    "<br>",
    "<span class=\"command\">Color Detection using OpenCV and Python: </span>" + "color detection",
    "<span class=\"command\">Playlist Flask (is not a webpage, just the code :c): </span>" + "playlist",
    "<span class=\"command\">Golang CLI: </span>" + "cli",
    "<span class=\"command\">NY Collisions: </span>" + "collisions",
    "<span class=\"command\">Chatbot: </span>" + "chatbot",
    "<span class=\"command\">GUI Calculator: </span>" + "calculator",
    "<br>",
]

help = [
    '<br>',
    '<span class="command">about</span>          Who am I?',
    '<span class="command">social</span>         My social media',
    '<span class="command">projects</span>       My projects',
    '<span class="command">clear</span>          Clear Terminal',
    '<br>'
];

setTimeout(function () {
    loopLines(banner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (pw) {
        let et = "*";
        let w = textarea.value.length;
        command.innerHTML = et.repeat(w);
    } else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML);
            git = commands.length;
            addLine("visitor@davetto:~$ " + command.innerHTML, "no-animation", 0);
            commander(command.innerHTML.toLowerCase());
            command.innerHTML = "";
            textarea.value = "";
        }
        if (e.keyCode == 38 && git != 0) {
            git -= 1;
            textarea.value = commands[git];
            command.innerHTML = textarea.value;
        }
        if (e.keyCode == 40 && git != commands.length) {
            git += 1;
            if (commands[git] === undefined) {
                textarea.value = "";
            } else {
                textarea.value = commands[git];
            }
            command.innerHTML = textarea.value;
        }
    }
}

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            help.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "about":
            about.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "clear":
            setTimeout(function () {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "social":
            social.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "projects":
            projects.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "color detection":
            addLine("<span class=\"command\">Opening Color Detection...</span>", "no-animation", 0);
            setTimeout(function () {
                window.open(ColorDetection, '_blank');
            }, 500);
            break;
        case "playlist":
            addLine("<span class=\"command\">Opening Playlist Flask...</span>", "no-animation", 0);
            setTimeout(function () {
                window.open(PlaylistFlask, '_blank');
            }, 500);
            break;
        case "cli":
            addLine("<span class=\"command\">Opening GolangCLI...</span>", "no-animation", 0);
            setTimeout(function () {
                window.open(GolangCLI, '_blank');
            }, 500);
            break;
        case "collisions":
            addLine("<span class=\"command\">Opening NY Collisions...</span>", "no-animation", 0);
            setTimeout(function () {
                window.open(NYCollisions, '_blank');
            }, 500);
            break;
        case "chatbot":
            addLine("<span class=\"command\">Opening Chatbot...</span>", "no-animation", 0);
            setTimeout(function () {
                window.open(Chatbot, '_blank');
            }, 500);
            break;
        case "calculator":
            addLine("<span class=\"command\">Opening Calculator...</span>", "no-animation", 0);
            setTimeout(function () {
                window.open(GUI_Calculator, '_blank');
            }, 500);
            break;
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}

function newTab(link) {
    setTimeout(function () {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function(item, index) {
      addLine(item, style, index * time);
    });
}