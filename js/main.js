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
colorDetection = "https://github.com/DavettoMX/Color-Detection-Using-OpenCV"
playlistFlask = "https://github.com/DavettoMX/Playlist-Flask"
golangCLI = "https://github.com/DavettoMX/GolangCLI"
nyCollisions = "https://share.streamlit.io/davettomx/ny-collitions/main/app.py"
chatbot = "https://github.com/DavettoMX/chatbot"
calculator = "https://github.com/DavettoMX/PythonCalculator"
todoList = "https://davetto-todoapp.herokuapp.com"

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
    "<span class=\"color2\">I have a lot of projects in the kitchen, but I'll let here projects I have do.</span>",
    "<br>",
    "<span class=\"inherit\">This is a list of projects I have do...",
    "<span class=\"inherit\">type the </span><span class=\"command\">'command'</span><span class=\"inherit\"> to display the projects.</span>",
    "<br>",
    "<span class=\"color2\">Machine Learning Projects           </span><span class=\"command\">ML</span>",
    "<span class=\"color2\">Data Science Projects               </span><span class=\"command\">DS</span>",
    "<span class=\"color2\">Backend Projects                    </span><span class=\"command\">Backend</span>",
    "<span class=\"color2\">Coding Projects                     </span><span class=\"command\">Coding</span>",
]

machineLearning_projects = [
    "<br>",
    "This are some projects I have done with Machine Learning and Artificial Intelligence.",
    "<br>",
    "<span class=\"color2\">Color Detection using OpenCV and Python: </span>    <span class=\"command\">color_detection</span>",
    "<span class=\"color2\">Chatbot: </span>                                    <span class=\"command\">chatbot</span>",
    "<br>",
]

dataScience_projects = [
    "<br>",
    "This are some projects I have done for practice Data Science.",
    "<br>",
    "<span class=\"color2\">NY Collisions: </span>          <span class=\"command\">collisions</span>",
    "<br>",
]

backend_projects = [
    "<br>",
    "This are some projects I have done for Backend.",
    "<br>",
    "<span class=\"color2\">Playlist Flask  </span>(is not a webpage, just the code :c):     <span class=\"command\">playlist</span>",
    "<span class=\"color2\">To Do List</span> Build with Django and React                    <span class=\"command\">todo</span>",
    "<br>",
]

coding_projects = [
    "<br>",
    "This are some projects I have done for Coding.",
    "<br>",
    "<span class=\"color2\">Golang CLI: </span>                 <span class=\"command\">cli</span>",
    "<span class=\"color2\">GUI Calculator: </span>             <span class=\"command\">calculator</span>",
    "<br>"
]

languages = [
    "<br>",
    "<span class=\"color2\">I have knowledge in the following langs: </span>",
    "<span class\"command\">Python</span>",
    "<span class\"command\">Golang</span>",
    "<span class\"command\">R</span>",
    "<span class\"command\">SQL</span>",
    "<span class\"command\">JavaScript</span>",
    "<br>",
    "<span class=\"color2\">I can also work with this langs: </span>",
    "<span class\"command\">Java</span>",
    "<span class\"command\">Scala</span>",
    "<span class\"command\">Julia</span>",
    "<br>"
]

databases = [
    "<br>",
    "<span class=\"color2\">I have knowledge in the following databases: </span>",
    "<span class\"command\">MySQL</span>",
    "<span class\"command\">PostgreSQL</span>",
    "<span class\"command\">MongoDB</span>",
    "<span class\"command\">MariaDB</span>",
    "<br>",
]

tools = [
    "<br>",
    "<span class=\"color2\">I have knowledge in the following tools: </span>",
    "<span class\"command\">Excel</span>",
    "<span class\"command\">GoogleSheets</span>",
    "<span class\"command\">Tableu</span>",
    "<span class\"command\">Power BI</span>",
    "<span class\"command\">Anaconda</span>",
    "<span class\"command\">Jupyter</span>",
    "<br>",
]

libraries = [
    "<br>",
    "<span class=\"color2\">I have knowledge in the following libraries: </span>",
    "<span class\"command\">Pandas</span>",
    "<span class\"command\">Numpy</span>",
    "<span class\"command\">Matplotlib</span>",
    "<span class\"command\">Scipy</span>",
    "<span class\"command\">Scikit-learn</span>",
    "<span class\"command\">Tensorflow</span>",
    "<span class\"command\">Pytorch</span>",
    "<span class\"command\">OpenCV</span>",
    "<span class\"command\">Selenium</span>",
    "<br>"
]

frameworks = [
    "<br>",
    "<span class=\"color2\">I have knowledge in the following frameworks: </span>",
    "<span class\"command\">Flask</span>",
    "<span class\"command\">Django</span>",
    "<span class\"command\">React</span>",
    "<br>",
]

help = [
    '<br>',
    '<span class="command">about</span>          Who am I?',
    '<span class="command">langs</span>          Programming Languages I know',
    '<span class="command">databases</span>      Databases I know',
    '<span class="command">tools</span>          Tools I use',
    '<span class="command">libraries</span>      Libraries I use',
    '<span class="command">frameworks</span>     Frameworks I use',
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
        case "ml":
            machineLearning_projects.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "color_detection":
            addLine("<span class=\"command\">Opening the project...</span>")
            window.open(colorDetection, '_blank');
            break;
        case "chatbot":
            addLine("<span class=\"command\">Opening the project...</span>")
            window.open(chatbot, '_blank');
            break;
        case "ds":
            dataScience_projects.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "collisions":
            addLine("<span class=\"command\">Opening the project...</span>")
            window.open(nyCollisions, '_blank');
            break;
        case "backend":
            backend_projects.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "playlist":
            addLine("<span class=\"command\">Opening the project...</span>")
            window.open(playlistFlask, '_blank');
            break;
        case "todo":
            addLine("<span class=\"command\">Opening the project...</span>")
            window.open(todoList, '_blank');
            break;
        case "coding":
            coding_projects.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "cli":
            addLine("<span class=\"command\">Opening the project...</span>")
            window.open(golangCLI, '_blank');
            break;
        case "calculator":
            addLine("<span class=\"command\">Opening the project...</span>")
            window.open(calculator, '_blank');
            break;
        case "langs":
            languages.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "databases":
            databases.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "tools":
            tools.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "libraries":
            libraries.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
            break;
        case "frameworks":
            frameworks.forEach(function (line) {
                addLine(line, "no-animation", 0);
            });
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