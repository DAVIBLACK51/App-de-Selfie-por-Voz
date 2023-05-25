var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("saída").innerHTML=Content
    if(Content=="tire minha foto"){
        Webcam.attach(camera);
        setTimeout(function(){
            takeSelfie();
        },5000);
        
    }
}
if(Content=="siri minha foto"){
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
    },5000);
    
}

if(Content=="foto"){
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
    },5000);
    
}
if(Content=="minha foto"){
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
    },5000);
    
}

camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

Webcam.snap( function(data_uri) {
    document.getElementById('results').innerHTML = 
     '<img src="'+data_uri+'"/>';
 } );

 function save()
 {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
 }