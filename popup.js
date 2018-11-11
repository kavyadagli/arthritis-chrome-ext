// Initialize Firebase
var config = {
	apiKey: "AIzaSyAuElShiaaeXkVWgOa3ZVMkBm8jJOKrd14",
	authDomain: "arthur-itis.firebaseapp.com",
	databaseURL: "https://arthur-itis.firebaseio.com",
	projectId: "arthur-itis",
	storageBucket: "arthur-itis.appspot.com",
	messagingSenderId: "200912976862"
};
firebase.initializeApp(config);

var database = firebase.database();


//store question answers
var info = new Map();

var questions = [
  "Did you experience morning stiffness?",
  "Did you take your medicine today?",
  "Were you able to write well today?",
  "Were you really fatigued?",
  "Was walking long distances difficult for you?"
]

var idx = 0;
document.getElementById('myCanvas').style.display = "none";
document.getElementById('end-screen').style.display = "none";


let button = document.getElementById('next');
button.addEventListener('click', function() {

  var selected = document.forms["form"]["ans"].value;

  selected == "yes" ? info.set(idx+1, 1): info.set(idx+1, 0);
  document.getElementById("form").reset();


  idx++;
  if (idx == questions.length-1) {

    button.innerHTML= "Done";
  } else if (idx == questions.length) {
    button.style.display = "none";
    document.getElementById('question').style.display = "none";
    document.getElementById('end-screen').style.display = "block";
    document.getElementById('myCanvas').style.display = "block";

    var text = "<strong>" + "Today's Summary" + "</strong>" + "<br><br>";

    for (var i=0; i < questions.length; i++) {
      var answer;
      info.get(i+1) == 1  ? answer = "yes" : answer = "no";
      text = text +  questions[i] + " " + answer + "<br>"
    }

    document.getElementById('summary').innerHTML = text;

    var ctx = document.getElementById('myCanvas').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          datasets: [{
            backgroundColor: 'rgb(108, 189, 190)',
            borderColor: 'rgb(255, 255, 255)',
            data: [.30,.54,.75,.,7,6,5],
          }]
        },

        options: {
          title: {
            display: true,
            text: 'Propability of Flareups This Week'
          },
          legend: {
            display: false,
            labels: {
              fontColor: 'rgb(93, 128, 157)'
            }
          },

          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Probability'
              }
            }]
          },

          animation: {
              duration: 0, // general animation time
            },
            hover: {
              animationDuration: 0, // duration of animations when hovering an item
            },
            responsiveAnimationDuration: 0, // animation duration after a resize
        }
    });

  }
  if (idx < questions.length) {
    document.getElementById("title").innerHTML = questions[idx];
  }
});
