const save = () => {
  const name = document.querySelector('#name').value
  localStorage.setItem('name', name)
  addName(name)
  clearForm()
}

const addName = (name) => {
  const nameList = document.querySelector('#nameList')
  const listItem = document.createElement('li')
  listItem.setAttribute('id', 'listName')
  listItem.textContent = name
  nameList.appendChild(listItem)
}

const clearForm = () => {
  document.querySelector('#name').value= ''
}

const remove = () => {
  localStorage.removeItem('name')
  const element = document.querySelector('#listName')
  element.remove()
}