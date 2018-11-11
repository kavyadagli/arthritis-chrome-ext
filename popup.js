//
// let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//  });
// };

//store question answers
var info = new Object();
var info = {};


var questions = [
  "Did you experience morning stiffness?",
  "Did you take your medicine today?",
  "Were you able to write well today?",
  "Were you really fatigued?",
  "Was walking long distances difficult for you?"
]

var idx = 0;

let button = document.getElementById('next');
button.addEventListener('click', function() {



  var selected = document.forms["form"]["ans"].value;

  selected == "yes" ? info[idx+1] = 1 : info[idx+1] = 0;




  document.getElementById("form").reset();

  idx++;
  if (idx == questions.length-1) {
    button.innerHTML= "Done";
  } else if (idx == questions.length) {
    button.style.display = "none";
    document.getElementById('question').innerHTML = "";
    document.getElementById("textbox").style.display = "block";
    document.getElementById("notesLabel").style.display = "block";
  }
  if (idx < questions.length) {
    document.getElementById("title").innerHTML = questions[idx];
  }

});
