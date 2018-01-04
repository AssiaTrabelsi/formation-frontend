var dataService = require('./service')
var readline = require('readline')


function console(dataService) {
    const menu =
        [
            { libellel: 'liste de tous les presentateurs', action: listerPresentateurs },
            { libellel: 'Top présentateurs', action: topPresentateurs },
            { libellel: 'liste de sessions', action: listerSessions },
            { libellel: 'Détail une sessions', action: detailSession }

        ]

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What do you think of Node.js? ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.close();
    });
}


function listerPresentateurs() {
    dataService.listerTousLesPresentateurs().forEach(p => p.console.log(p.firstname))
}

function topPresentateurs() {
    dataService.listerTopPresentateurs().filter(t => t.console.log(t.topspeaker))
}

function listerSessions() {
    dataService.listerToutesLesSessions().forEach(s => s.console.log(s.title))
}

function detailSession() {

}


