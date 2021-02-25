
document.getElementById("mb1").onclick = function() {bytSida("index.html")};

document.getElementById("mb3").onclick = function() {bytSida("players.html")};

document.getElementById("mb4").onclick = function() {bytSida("teams.html")};

document.getElementById("mb2").onclick = function() {bytSida("tournaments.html")};





function bytSida(html) {
    window.location.href = html;
}


  function searchShow(query){

    const api_key = "107b73e163c93f5f70ed0830a93940a0";
    const api_url = "http://api.mediastack.com/v1/news?access_key=" + api_key + "&keywords=Uefa%20Champions%20League&sources=en";

    fetch(api_url)
    .then((response) => response.json())
    .then((jsonData) => {
        console.log(jsonData);
        results = jsonData.data;
        console.log(results);
        displaydataResult(results);
    });




}

function displaydataResult(results){
results.forEach((result) =>{
    let parent = document.getElementById("col-4");
    var child = document.createElement("div");
    var imeg = document.createElement("img");
    var child1 = document.createElement("div");
    var title = document.createElement("h2");
    var pa = document.createElement("p");
    var date = document.createElement("h3");
    //var searchbtn = document.createElement("button");
    
  imeg.className = "card-img-top";
  child1.className = "card-body";
  child.className = "card";
  pa.className ="card-text"
  imeg.alt = "Card image cap";


    imeg.src = result.image;
    title.innerText = result.title;
    pa.innerText = result.description;
    date.innerText = result.published_at;
    
   // searchbtn.onclick= openUrl(result.url);

if(result.image == null){
    console.log("No Pic");
}
  
else{
    //child.append(searchbtn);
    
    child.append(imeg);
    child1.append(title);
    child1.append(pa);
    child1.append(date);
    child.append(child1);
    parent.append(child);
}
    

});

}


window.onload = searchShow();
    
  

 