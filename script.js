document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Create a new list item to display the response
        const listItem = document.createElement('li');
        listItem.innerText = `Q: ${form.question.value}, A: ${form.answer.value}`;
        // Clear the form
        form.reset();
    });
    });
