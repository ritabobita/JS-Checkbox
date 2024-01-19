let checkbox = document.querySelectorAll('input[type=checkbox]')

let shiftDown = false;
let setShift = function(event){
    if (event.shiftKey) {
        shiftDown = true
      } else {
        shiftDown = false
      }
    }

document.addEventListener('keydown', setShift)
document.addEventListener('keyup', setShift)

function checkMarkAll() {
let lastChecked
const checkboxes = Array.from(checkbox);

checkboxes.forEach((checkmark, index) => {
    checkmark.addEventListener('click', () => {
        if (shiftDown && lastChecked) {
            const start = checkboxes.indexOf(lastChecked);
            const end = checkboxes.indexOf(checkmark);
            checkboxes.slice(Math.min(start, end), Math.max(start, end) + 1)
            .forEach(checkbox => checkbox.checked = true);
        }
  
        lastChecked = checkmark;
      });
    });
  }

checkMarkAll()