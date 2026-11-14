document.addEventListener('DOMContentLoaded', function() {

    // Find all Edit buttons
    const editButtons = document.querySelectorAll('.edit-btn');

    // Find all Cancel buttons
    const cancelButtons = document.querySelectorAll('.cancel-btn');

    // When Edit is clicked
    editButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            const item = button.closest('li');
            const taskName = item.querySelector('.task-name');
            const editForm = item.querySelector('.edit-form');

            taskName.style.display = 'none';
            editForm.style.display = 'block';

            button.style.display = 'none';

            editForm.querySelector('input[name="task"]').focus();
        });
    });

    // When Cancel is clicked
    cancelButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            const item = button.closest('li');
            const taskName = item.querySelector('.task-name');
            const editForm = item.querySelector('.edit-form');
            const editButton = item.querySelector('.edit-btn');

            editForm.style.display = 'none';
            taskName.style.display = 'inline';
            editButton.style.display = 'inline-block';
        });
    });

});