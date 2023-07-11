const removeActiveStyle = (buttons) => {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
};

const generateGrid = (divNum = 20 * 20, className = 'grid-20x20') => {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';

  Array.from({ length: divNum }).forEach(() => {
    const gridDiv = document.createElement('div');
    gridContainer.classList.remove('grid-10x10', 'grid-20x20', 'grid-30x30');
    gridContainer.classList.add(className);
    gridContainer.appendChild(gridDiv);
  });
};

const chooseGrid = () => {
  const colorButtons = document.querySelectorAll('.rectangle');
  const gridButtons = document.querySelectorAll('.circle');

  gridButtons.forEach((button) => {
    button.addEventListener('click', () => {
      removeActiveStyle(colorButtons);
      removeActiveStyle(gridButtons);

      if (button.classList.contains('grid-10')) {
        button.classList.add('active');
        generateGrid(10 * 10, 'grid-10x10');
      } else if (button.classList.contains('grid-20')) {
        button.classList.add('active');
        generateGrid();
      } else if (button.classList.contains('grid-30')) {
        button.classList.add('active');
        generateGrid(30 * 30, 'grid-30x30');
      }
    });
  });
};


chooseGrid();
generateGrid();

