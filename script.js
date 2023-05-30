const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const href = button.dataset.href;
    window.location.href = href;
  });
});

