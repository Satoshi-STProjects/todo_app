// Update counts
function updateCounts() {
  const todoCount = document.getElementById('task-list').children.length;
  const completedCount = document.getElementById('completed-list').children.length;
  document.getElementById('todo-count').textContent = `(${todoCount})`;
  document.getElementById('completed-count').textContent = `(${completedCount})`;
}


// Click add button and execute
document.getElementById('add-task-button').addEventListener('click', function () {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
  <span>${taskText}</span>
  <button class="complete-btn">Complete</button>
`;

  document.getElementById('task-list').appendChild(li);
  updateCounts();
  taskInput.value = '';

  li.querySelector('.complete-btn').addEventListener('click', function () {
    li.classList.add('done');
    document.getElementById('completed-list').appendChild(li);
    updateCounts();

    const btn = li.querySelector('button');
    btn.textContent = 'Delete';
    btn.className = 'delete-btn';

    btn.addEventListener('click', function () {
      li.remove();
      updateCounts();
    });
  });
});

// Enter and execute
document.getElementById('task-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
   const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
  <span>${taskText}</span>
  <button class="complete-btn">Complete</button>
`;

  document.getElementById('task-list').appendChild(li);
  updateCounts();
  taskInput.value = '';

  li.querySelector('.complete-btn').addEventListener('click', function () {
    li.classList.add('done');
    document.getElementById('completed-list').appendChild(li);
    updateCounts();

    const btn = li.querySelector('button');
    btn.textContent = 'Delete';
    btn.className = 'delete-btn';

    btn.addEventListener('click', function () {
      li.remove();
      updateCounts();
    });
  });

    }
});