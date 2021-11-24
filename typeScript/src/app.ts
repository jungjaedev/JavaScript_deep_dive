const button = document.querySelector('button')!;

// a comment
function clickHandler(message: string) {
  console.log('Clicked!' + message);
  
}
if(button) {
  button.addEventListener('click', clickHandler.bind(null, "Hi"));
}
