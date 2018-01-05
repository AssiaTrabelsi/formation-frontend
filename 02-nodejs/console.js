var dateService = require("./service");

const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

function appConsole() {
    console.log('*** Application Conférence ***');
    console.log('1. Liste de tous les présentateurs ');
    console.log('2. Top présentateurs ');
    console.log('3. Liste des sessions');
    console.log('4. Détail dune session');
}

function start() {
    appConsole();
    rl.question('What do you think of Node.js? ', function (answer) {

        console.log('Thank you for your valuable feedback:', answer);


        if (answer.match('1')) {
            dateService.listerTousLesPresentateurs().forEach(p => {
                console.log(p.firstname + ' ' + p.lastname);
            });
            rl.close();

        } else if (answer.match('2')) {
            dateService.listerTopPresentateurs().forEach(t => {
                console.log(t.firstname + ' ' + t.lastname);

            });
            rl.close();

        } else if (answer.match('3')) {
            dateService.listerToutesLesSessions().forEach(s => {
                console.log(s.id + ' ' + s.title);

            });
            rl.close();

        } else if (answer.match('4')) {
            rl.question('Quelle session? ', function (answer) {
                session = dateService.trouverUneSession(answer);
                console.log(session);
                rl.close();
            })

        } else {
            console.log('Ended');
            rl.close();
        }

    });
}
start();
