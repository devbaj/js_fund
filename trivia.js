var player = {
    points: 0
};

function writeScore(score) {
    var scoreString = "";
    scoreString += score + " points";
    $('.score').html(scoreString);
    console.log("wrote score: ", scoreString)
}

function updateScore(player, gain = 0) {
    player.points += gain;
    console.log("updated score to", player.points);
    writeScore(player.points);
    return player.points;
}

function getTriviaData(){
    console.log("requesting from API");
    // the following can be refactored to become an array of jsons
    var cat1data = new Promise(function(resolve,reject){
        resolve($.get("https://opentdb.com/api.php?amount=10&category=24&type=multiple"));
    });
    cat1data.then(function(cat1data) {
        console.log(cat1data);
        $('#cat1-name').html(cat1data.results[0].category);
        for (let i in cat1data.results) {
            console.log(cat1data.results[i].question);
            var qscore = (parseInt(i) + 1) * 100;
            let htmlString = "<p class='cat1 qbox' qnum='" + i + "'>" + qscore + "</p>";
            $('#cat1').append(htmlString);
        }
    });
    cat1data.catch(function() {
        console.log("cat1data retrieval failed");
    })
    
    var cat2data = new Promise(function(resolve, reject){
        resolve($.get("https://opentdb.com/api.php?amount=10&category=23&type=multiple"));
    });
    cat2data.then(function(cat2data){
        console.log(cat2data);
        $('#cat2-name').html(cat2data.results[0].category);
        for (let i in cat2data.results) {
            console.log(cat2data.results[i].question);
            var qscore = (parseInt(i) + 1) * 100;
            let htmlString = "<p class='cat2 qbox' qnum='" + i + "'>" + qscore + "</p>";
            $('#cat2').append(htmlString)
        }
    });
    cat2data.catch(function() {
        console.log("cat2data retrieval failed");
    });

    var cat3data = new Promise(function(resolve, reject){
        resolve($.get("https://opentdb.com/api.php?amount=10&category=31&type=multiple"));
    });
    cat3data.then(function(cat3data){
        console.log(cat3data);
        $('#cat3-name').html(cat3data.results[0].category);
        for (let i in cat3data.results) {
            console.log(cat3data.results[i].question);
            var qscore = (parseInt(i) + 1) * 100;
            let htmlString = "<p class='cat3 qbox' qnum='" + i + "'>" + qscore + "</p>";
            $('#cat3').append(htmlString)
        }
    });
    cat3data.catch(function() {
        console.log("cat3data retrieval failed");
    });

    var cat4data = new Promise(function(resolve, reject){
        resolve($.get("https://opentdb.com/api.php?amount=10&category=12&type=multiple"));
    });
    cat4data.then(function(cat4data){
        console.log(cat4data);
        $('#cat4-name').html(cat4data.results[0].category);
        for (let i in cat4data.results) {
            console.log(cat4data.results[i].question);
            var qscore = (parseInt(i) + 1) * 100;
            let htmlString = "<p class='cat4 qbox' qnum='" + i + "'>" + qscore + "</p>";
            $('#cat4').append(htmlString)
        }
    });
    cat4data.catch(function() {
        console.log("cat4data retrieval failed");
    });
}


$(document).ready(function() {
    // get category 1 data
    console.log("doc ready")
    getTriviaData();
    updateScore(player);
})