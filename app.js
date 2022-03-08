// To obtain time
var everyday = new Date();
var hrs = everyday.getHours();
if(hrs<10){
    hrs=`0${hrs}`;
}
var min = everyday.getMinutes();
if(min<10){
    min=`0${min}`;
}
var time = hrs + " : " + min;
document.getElementById('firstfeature').innerHTML = time;

//To display sms
document.getElementById("sms1").addEventListener("click",function(){
    var sms1 = document.getElementById("sms1");
    sms1.innerHTML="Java is a high level programming language developed by Sun Microsystems.";
    sms1.style.display="block";
    var sms2 = document.getElementById("sms2");
    sms2.style.display="none";
    var sms3 = document.getElementById("sms3");
    sms3.style.display="none";
    var mess = document.getElementById("sms");
    mess.style.display="none";
    mess.style.display="flex";
})
document.getElementById("sms2").addEventListener("click",function(){
    var sms1 = document.getElementById("sms1");
    sms1.style.display="none";
    var sms2 = document.getElementById("sms2");
    sms2.innerHTML="HTML is a Hypertext Markup language used to create web pages.";
    sms2.style.display="block";
    var sms3 = document.getElementById("sms3");
    sms3.style.display="none";
    var mess = document.getElementById("sms");
    mess.style.display="none";
    mess.style.display="flex";
})
document.getElementById("sms3").addEventListener("click",function(){
    var sms1 = document.getElementById("sms1");
    sms1.style.display="none";
    var sms2 = document.getElementById("sms2");
    sms2.style.display="none";
    var sms3 = document.getElementById("sms3");
    sms3.innerHTML="CSS is the language we use to style an HTML document.";
    sms3.style.display="block";
    var mess = document.getElementById("sms");
    mess.style.display="none";
    mess.style.display="flex";
})