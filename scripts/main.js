let apikey = '3iPm006gtnDlfYwKDbCjLEXo8oabmmeT'
let queryURLBase ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=3iPm006gtnDlfYwKDbCjLEXo8oabmmeT";
let searchTerm="";
let filters="";

$(document).ready(function(){
    // alert("i am alive");
    $.ajax({
        url:queryURLBase,
        method:'GET'
    }).then(function(data){
        console.log(data);
    });
});