document.getElementById('add-event-btn').addEventListener('click', function() {
    const eventDate = document.getElementById('event-date').value;
    const eventTitle = document.getElementById('event-title').value;

    if (eventDate && eventTitle) {
        const newEvent = document.createElement('li');
        newEvent.innerHTML = `<strong>${eventDate}:</strong> ${eventTitle}`;
        

        document.querySelector('.calendar ul').appendChild(newEvent);


        document.getElementById('event-date').value = '';
        document.getElementById('event-title').value = '';
    } else {
        alert('Please enter both a date and a task title.');
    }
});

document.getElementById('add-todo-btn').addEventListener('click', function() {
    const todoTask = document.getElementById('todo-task').value;

    // Check if task input has a value
    if (todoTask) {
        // Create a new list item with a checkbox for the to-do task
        const newTodo = document.createElement('li');
        newTodo.innerHTML = `<input type="checkbox"> ${todoTask}`;
        
        // Add the new to-do item to the to-do list
        document.querySelector('.checklist ul').appendChild(newTodo);

        // Clear input field after adding
        document.getElementById('todo-task').value = '';
    } else {
        alert('Please enter a task title.');
    }
});
