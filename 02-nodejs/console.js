var dataService = require('./service')
var readline = require('readline')


function AppConsole(dataService) {
    const menu =
        [
            { libelle: 'liste de tous les presentateurs', action: listerPresentateurs },
            { libelle: 'Top présentateurs', action: topPresentateurs },
            { libelle: 'liste de sessions', action: listerSessions },
            { libelle: 'Détail une sessions', action: detailSession }

        ]

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What do you think of Node.js? ', (answer) => {
        menu.forEach(function (m, index) {

            console.log(m)
            console.log(index)
        })
        rl.close();
    });
}


function start() {

}
AppConsole(dataService);
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


