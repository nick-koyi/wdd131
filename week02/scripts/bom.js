const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.appendChild(li);
    input.value = '';// Clear the input

    // Add event listener to remove the chapter
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();
    });
  }
});
