let counterID = 5;

document.getElementById('form').addEventListener('click', (event) => {
  document.getElementById('err').style.display = 'none';
  if (event.target.className === 'taskCheckbox') {
    const checkbox = document.getElementById(event.target.id);
    const divEl = document.createElement('div');
    divEl.className = 'task';

    if (checkbox.checked) {
      divEl.innerHTML = `
        <label class="taskL">
          <span class="taskName">${checkbox.previousElementSibling.textContent}</span>
          <input id="${event.target.id}" class="taskCheckbox" type="checkbox" checked>
        </label>`;
      document.getElementById('pinTask').appendChild(divEl);
    } else {
      divEl.innerHTML = `
        <label class="taskL">
          <span class="taskName">${checkbox.previousElementSibling.textContent}</span>
          <input id="${event.target.id}" class="taskCheckbox" type="checkbox">
        </label>`;
      document.getElementById('tasks').appendChild(divEl);
    }

    checkbox.parentNode.parentNode.parentNode.removeChild(checkbox.parentNode.parentNode);

    const pinned = document.getElementById('pinned');

    if (document.getElementById('pinTask').childElementCount === 1) {
      pinned.textContent = 'Pinned: No pinned tasks';
    } else {
      pinned.textContent = 'Pinned:';
    }

    const all = document.getElementById('title');

    if (document.getElementById('tasks').childElementCount === 1) {
      all.textContent = 'All Tasks: No tasks found';
    } else {
      all.textContent = 'All Tasks:';
    }
  }
});

document.getElementById('text').addEventListener('keypress', (e) => {
  const key = e.which || e.keyCode;
  if (key === 13) {
    e.preventDefault();
    if (document.getElementById('text').value === '') {
      document.getElementById('err').style.display = 'block';
    } else {
      const divEl = document.createElement('div');
      divEl.id = `TName ${counterID}`;
      divEl.className = 'task';
      divEl.innerHTML = `
      <label class="taskL">
        <span class="taskName">${document.getElementById('text').value}</span>
        <input id="${counterID += 1}" class="taskCheckbox" type="checkbox">
      </label>`;
      document.getElementById('tasks').appendChild(divEl);
      document.getElementById('text').value = '';
    }

    for (let i = 0; i < document.getElementById('tasks').childElementCount; i += 1) {
      document.getElementById('tasks').children[i].style.display = 'block';
    }

    const all = document.getElementById('title');

    if (document.getElementById('tasks').childElementCount === 1) {
      all.textContent = 'All Tasks: No tasks found';
    } else {
      all.textContent = 'All Tasks:';
    }
  }
});
