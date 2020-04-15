let el = [];
let hide = 0;

function newArr() {
  el = [];
  for (let i = 1; i < document.getElementById('tasks').childElementCount; i += 1) {
    el.push(document.getElementById('tasks').children[i].children[0].children[0].textContent);
  }
}

function hideArr() {
  document.getElementById('tasks').children[hide].style.display = 'none';
}

const similar = (firstLett, checkLett) => {
  let sameCharCount = 0;
  for (let i = 0; i < checkLett.length; i += 1) {
    if (firstLett.charAt(i) !== checkLett.charAt(i)) {
      const all = document.getElementById('title');
      all.textContent = 'All Tasks: No tasks found';
      hideArr();
      break;
    }
    sameCharCount += 1;
  }
  return sameCharCount;
};

document.getElementById('form').onkeypress = (event) => {
  const key = event.which || event.keyCode;
  if (key === 13) {
    return;
  }
  newArr();
  let equal = 0;
  for (let i = 0; i < el.length; i += 1) {
    hide += 1;
    const firstLett = el[i].toLowerCase();
    const checkLett = (document.getElementById('text').value.toLowerCase()
    + String.fromCharCode(event.keyCode).toLowerCase());
    const output = similar(firstLett, checkLett);
    if (output > equal) {
      el[i] = output;
      equal = output;
    }
  }
  hide = 0;
};
