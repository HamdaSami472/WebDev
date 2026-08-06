const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-button'); 
const taskList = document.getElementById('list'); 
const totalCount = document.getElementById('total-count');
const completedCount = document.getElementById('completed-count');
const clearBtn = document.getElementById('clear-btn');

function updateCounters() {
    const allTasks = document.querySelectorAll('.task-item');
    const totalTasks = allTasks.length;
    const completedTasks = document.querySelectorAll('.task-checkbox:checked').length; 
    
    totalCount.textContent = totalTasks;
    completedCount.textContent = completedTasks;
}


addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') { 
        alert('Please enter a task');
        return;
    }

    // Create task item
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item'; // FIXED: was task-taskItem

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox'; 


    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text';
    taskTextSpan.textContent = taskText;

   
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

  
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskItem.classList.add('completed');
            taskTextSpan.style.textDecoration = 'line-through';
            taskTextSpan.style.color = '#888';
        } else {
            taskItem.classList.remove('completed');
            taskTextSpan.style.textDecoration = 'none';
            taskTextSpan.style.color = 'black';
        }
        updateCounters();
    });

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
        updateCounters();
    });


    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);
    

    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskInput.focus();
    
    updateCounters();
    console.log('Task added:', taskText);
});

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addBtn.click(); 
    }
});


clearBtn.addEventListener('click', function() {
    if (taskList.children.length === 0) {
        alert('No tasks to clear!');
        return;
    }
    
    if (confirm('Are you sure you want to delete ALL tasks?')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        updateCounters();
        console.log('All tasks cleared');
    }
});

updateCounters();
console.log('To-Do List is ready!');