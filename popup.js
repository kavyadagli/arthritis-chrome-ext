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

//get answer for question 1
let form1 = document.getElementById('form1');
form.addEventListener('click', function() {
  yes = document.getElementById('yes').value;
  no = document.getElementById('no').value;

  if (yes.clicked) {
    dict[1] = 1;
  } else if (no.clicked) {
    dict[1] = 0;
  }
});

var elements = ['question1', 'question2', 'question3', 'question4', 'question5'];
var idx = 0;

for (var i = 1; i < elements.length; i++) {
  document.getElementById(elements[i]).style.display = 'none';
}

let button = document.getElementById('next');
button.addEventListener('click', function() {

  document.getElementById(elements[idx]).style.display = 'block';


  if (idx == 0) {
    document.getElementById(elements[elements.length-1]).style.display = 'none';
    idx++;
  } else if (idx > 0 && idx < elements.length-1) {
    document.getElementById(elements[idx-1]).style.display = 'none';
    idx++;
  } else {
    document.getElementById(elements[idx-1]).style.display = 'none';
    button.innerHTML= "Done";
  }

});
