// document.querySelector(".btn").addEventListener("click", function(){
//     // alert("Button clicked!");
//     fetch("/advice")
// });
function getAdvice() {
    fetch("/advice")
      .then(response => response.text())
      .then(html => {
        document.querySelector('body').innerHTML = html;
      });
  }
  