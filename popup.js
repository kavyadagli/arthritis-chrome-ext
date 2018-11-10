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
let form = document.getElementById('question1');
form.addEventListener('click', function() {
  yes = document.getElementById('yes').value;
  medium = document.getElementById('medium').value;
  no = document.getElementById('no').value;

  if (yes.clicked) {
    dict[1] = "yes";
  } else if (medium.clicked) {
    dict[1] = "a little";
  } else if (no.clicked) {
    dict[1] = "no";
  }
});
