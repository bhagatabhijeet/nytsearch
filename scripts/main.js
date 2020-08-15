let apikey = '3iPm006gtnDlfYwKDbCjLEXo8oabmmeT'
let queryURLBase ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";//election&api-key=3iPm006gtnDlfYwKDbCjLEXo8oabmmeT";
//
let searchTerm="";
let searchCount="";
let startYear="";
let endYear="";

let searchObject="";


$(document).ready(function(){
    // alert("i am alive");
    
    //add event handler to runSearch button
    $("#runSearch").on("click",searchArticles);



   
});


// this is where the search will happen
function searchArticles(event){
    event.preventDefault();
    // alert(buildURL());
    $.ajax({
        url:queryURLBase,
        method:'GET'
    }).then(function(data){
        // console.log(data);
        searchObject =data;
    });
}

function buildURL(){
    searchTerm=$("#searchTerm").val().trim();
    searchCount = $("#numRecordsSelect").val();
    startYear=$("#startYear").val().trim();
    endYear=$("#endYear").val().trim();

    let returnUrl=`${queryURLBase}${searchTerm}`;

    //user provides no values
    if(startYear === "" &&  endYear === ""){
        returnUrl=`${queryURLBase}${searchTerm}&api-key=${apikey}`;
        return returnUrl;

        
    }
    //user provides end year only
    if( startYear === "" && endYear !== "")
    {
        returnUrl=`${queryURLBase}${searchTerm}&facet=true&end_date=${endYear}&api-key=${apikey}`;
        return returnUrl;
        
    }
    //user provide start year only
    if( startYear !== "" && endYear === "")
    {
        returnUrl=`${queryURLBase}${searchTerm}&facet=true&begin_date=${startYear}&api-key=${apikey}`;
        return returnUrl;
        
    }
    //user provides both values
    if( startYear !== "" && endYear !== "")
    {
        returnUrl=`${queryURLBase}${searchTerm}&facet=true&begin_date=${startYear}&end_date=${endYear}&api-key=${apikey}`;
        return returnUrl;
        
    }
   
    
}