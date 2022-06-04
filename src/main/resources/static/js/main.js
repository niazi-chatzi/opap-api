$(function($) {
    $("#update-numbers").on("click", function(e) {
        e.preventDefault();

        var resultObj = { data: [] };
        var rsltList = [];

        for(var i = 0; i < 80; i++) {
            rsltList.push(0);
        }

        (getNumbers(rsltList, resultObj));
    });
});


function getNumbers(rsltList, resultObj) {
    var list = [], bonusses = [];
    $.ajax({
        url: "https://api.opap.gr/draws/v3.0/1100/last/100",
        method: "GET",
        success: function(data, xhr, options) {
            processData(data, resultObj, rsltList, list, bonusses);
        },
        error: function(xhr, data, error) {
            console.log("Error", xhr)
        }
    });
}


function processData(data, resultObj, rsltList, list, bonusses) {
    data.forEach(function(obj) {
        if(typeof obj.winningNumbers === "undefined" || obj.winningNumbers === null) return;
        list.push(obj.winningNumbers.list);
        bonusses.push(obj.winningNumbers.bonus[0]);
    });

    sortNumbersForTheirPopularity(list, resultObj, rsltList);
}

function sortNumbersForTheirPopularity(data, resultObj, rsltList) {
    // Exoume mia lista apo arithmous x 99 (last 99 klhrosois) fores pairnoume apo ton opap
    for(var i = 0; i < 80; i++) {
        data.forEach(function(d) {
            d.forEach(function(x) {
                if( x == i+1 ) rsltList[i]++; // timesShown! each time a number is seen in a draw +1
            });
        });
    }

    for(var i = 0; i < 80; i++) {
        resultObj.data.push({number: i+1, timesShown: rsltList[i]});
    }

    resultObj.data.sort( compare );
    put(resultObj.data);
}

function compare( a, b ) {
    if ( a.number < b.number ){
        return -1;
    }
    if ( a.number > b.number ){
        return 1;
    }
    return 0;
}

function reverse( a, b ) {
    if ( a.timesShown < b.timesShown ){
        return 1;
    }
    if ( a.timesShown > b.timesShown ){
        return -1;
    }
    return 0;
}

function put(data) {
    $.ajax({
        url: "http://localhost:8081/rest/winningNumbers",
        type: "PUT",
        crossDomain: true,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(data) {
            alert("Success!");
            console.log(data);
            window.location = "/";
        },
        error: function(xhr) {
            if(xhr.responseJSON !== undefined) {
                alert("Error Code: " + xhr.status +
                    "\nMessage: " + xhr.responseJSON.message);
            }
        }
    });
}