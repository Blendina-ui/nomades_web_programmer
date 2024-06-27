console.log(USERS)

const getUserFullName = user => `${user.name} ${user.username}`

const createUserCardReal = user => {
  const users = document.querySelector("#row-users")
 
  // TODO: create a bootstrap card that represent the given user
  const card = document.createElement("div")
  card.className= "card"
  users.appendChild(card)
  

const cardHeader = document.createElement("div")
cardHeader.className = "card-header"
cardHeader.innerHTML = "<h2>Full Name</h2>"
users.appendChild(cardHeader)

const listItems = document.createElement("ul")
listItems.className = "list-group"
listItems.innerHTML = <li></li>


console.log(users)
return card

}

const createUserCol = (user) => {
  












// TODO: create a bootstrap (col-4 my-3) div
  // TODO: create a bootstrap card for the user using the createUserCardReal function
  // TODO: add the bootstrap card to the col div
  // TODO: add the col to the bootstrap row with id row-users
}

const displayUsers = users => {
  users.forEach(createUserCol)
}

const search = searchStr => {
  // TODO: implement search based on key:value string
  // const [searchKey, searchValue] = searchStr.split(':')
  const searchKey = searchStr.split(':')[0]
  const searchValue = searchStr.split(':')[1]
  let users = USERS
  // TODO: your search here
  // protip: use .filter()
  return users
}
createUserCardReal(USERS[0])

