var url="http://api.icndb.com/jokes/random",button=document.getElementById("get-joke");button.addEventListener("click",function(){getJoke()});var paragraph=document.getElementById("joke");function getJoke(){var t=new XMLHttpRequest;t.open("GET",url),t.addEventListener("load",function(){var e=JSON.parse(t.response);paragraph.innerHTML=e.value.joke}),t.send()}document.addEventListener("DOMContentLoaded",getJoke);