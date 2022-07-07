const button = document.querySelector('button');

const handleClick = (message: string) => {
  console.log('Clicked ' + message);
};

button?.addEventListener('click', handleClick.bind(null, 'button'));
