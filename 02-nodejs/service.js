var data = require('./data/devfest-2015');

//console.log(data.sessions[0])

exports.listerTousLesPresentateurs = function () {
    return data.speakers;
}

exports.listerToutesLesSessions = function () {

    return data.sessions
}

exports.trouverUneSession = function (idSession) {
    return data.sessions.find(p => p.id == idSession)

}
exports.listerTopPresentateurs = function () {
    return data.speakers.filter(c => c.topspeaker)

}


