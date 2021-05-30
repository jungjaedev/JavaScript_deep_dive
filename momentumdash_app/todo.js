'use strict';

const $todoform = document.querySelector('.todoform'),
  $todoinput = $todoform.querySelector('input'),
  $todolist = document.querySelector('.todolist');

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  delBtn.innerText = '❌';
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  $todolist.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = $todoinput.value;
  paintToDo(currentValue);
  $todoinput.value = '';
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedTODos = JSON.parse(loadedToDos);
    parsedTODos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  $todoform.addEventListener('submit', handleSubmit);
}

init();
