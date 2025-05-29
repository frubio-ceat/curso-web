document.addEventListener('keydown', function(event) {
    // Check if the 'Enter' key was pressed
    if (event.key === 'Enter') {
        console.log('Enter key was pressed!');
    } else {
        console.log(`Key pressed: ${event.key}`);
    }
});

/*
// Detenemos la propagación del evento keydown en inputs y textareas
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
  input.addEventListener("keydown", (e) => {
    e.stopPropagation();
  });
});
*/