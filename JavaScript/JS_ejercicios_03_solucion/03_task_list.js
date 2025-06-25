const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// comprobamos cuando se pulsa la tecla Enter en el input de tareas
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && taskInput.value.trim() !== '') {
    // añadimos la tarea si no está vacía
    addTask(taskInput.value.trim());
    // Limpiamos el input
    taskInput.value = '';
  }
});

// Para cada tarea vamos a crear un elemento con varios botones
function addTask(taskText) {
  // Creamos el contenedor de la tarea
  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';

  // Creamos el botón de completar tarea
  const checkBtn = document.createElement('button');
  checkBtn.className = 'check-btn';
  checkBtn.textContent = '✓';

  // Creamos el span que contendrá el texto de la tarea
  const taskTextSpan = document.createElement('span');
  taskTextSpan.className = 'task-text';
  taskTextSpan.textContent = taskText;

  // Creamos el botón de eliminar tarea
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '✕';

  // Añadir event listeners
  checkBtn.addEventListener('click', function() {
    // al utilizar una función anónima (SIN FLECHA), `this` se refiere al botón
    toggleComplete(this);
  });

  deleteBtn.addEventListener('click', function() {
    deleteTask(this);
  });

  // Añadir elementos al contenedor
  taskItem.appendChild(checkBtn);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteBtn);

  // Añadir el contenedor de la tarea a la lista de tareas
  taskList.appendChild(taskItem);
}

function toggleComplete(button) {
  // buscamos el elemento padre del botón (el contenedor de la tarea)
  const taskItem = button.parentElement;
  // buscamos el span que contiene el texto de la tarea
  const taskText = taskItem.querySelector('.task-text');

  // Toggle añade (si no existe) o quita (si ya existe) la clase 'completed' a las clases.
  // De esta forma, cada vez que se pulsa el botón, se alterna el estado de completado según el CSS.
  taskText.classList.toggle('completed');
  button.classList.toggle('completed');
}

function deleteTask(button) {
  // para eliminar la tarea, buscamos el elemento padre del botón (el contenedor de la tarea)
  const taskItem = button.parentElement;
  // y lo eliminamos del DOM
  taskItem.remove();
}