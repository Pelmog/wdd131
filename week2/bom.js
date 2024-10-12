const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Add chapter on button click
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        li.textContent = input.value;
        li.append(deleteButton);
        list.append(li);

        // Clear input and focus it
        input.value = '';
        input.focus();

        // Delete chapter on button click
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });
    } else {
        alert('Please enter a chapter.');
    }
});