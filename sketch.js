function note1() {
    window.alert("Note: Play different sounds like clap, spoon and cup, bell to make the aliens dance");
}
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/AiQhG2JR0/model.json', modelReady);
}
function modelReady() {
    classifier.classify(check);
}
function check(error,results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear : "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy : "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
        if(results[0].label == 'Background Noise') {
            document.getElementById("alien3").src="aliens-03.gif"
        }
        else if(results[0].label == 'bell') {
            document.getElementById("alien2").src="aliens-02.gif"
        }
        else if(results[0].label == 'Clap') {
            document.getElementById("alien4").src="aliens-04.gif"
        }
        else if(results[0].label == 'spoon and cup') {
            document.getElementById("alien1").src="aliens-01.gif"
        }
    }
}
