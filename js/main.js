
var qoute=[
{'qoute':"Resentment is like drinking poison and waiting for your enemies to die.",
'auter':"--Nelson Mandela"},

{'qoute':"Do not take life too seriously. You will not get out alive.",
'auter':"--Elbert Hubbard"},
{'qoute':"The best revenge is massive success.",
'auter':"--Frank Sinatra"},
{'qoute':"You miss 100% of the shots you don't take.",
'auter':"--Wayne Gretzy"},
{'qoute':"It's not what happens to you, but how you react to it that matters.",
'auter':"--Epictetus"},


]

function get(){
var num = Math.floor(Math.random()*qoute.length)
    document.getElementById("qoute").innerHTML=qoute[num].qoute;
    document.getElementById("auther").innerHTML=qoute[num].auter;
    
   

}