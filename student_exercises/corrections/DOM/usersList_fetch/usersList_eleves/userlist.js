const getUserFullName = user => `${user.name} ${user.username}`
const createUserCardReal = user => {
  const card = document.createElement("div")
  card.classList.add("card")
  card.id = `card-${user.id}`

  const cardHeader = document.createElement("div")
  cardHeader.classList.add("card-header")

  const cardTitle = document.createElement("h2")
  cardTitle.classList.add("card-title")
  cardTitle.textContent = getUserFullName(user)

  cardHeader.appendChild(cardTitle)
  card.appendChild(cardHeader)

  const cardUserInfoList = document.createElement("ul")
  cardUserInfoList.classList.add("list-group", "list-group-flush")

  const cardUserInfoUsername = document.createElement("li")
  cardUserInfoUsername.classList.add("list-group-item")
  cardUserInfoUsername.textContent = user.username

  const cardUserInfoEmail = document.createElement("li")
  cardUserInfoEmail.classList.add("list-group-item")
  const cardUserInfoEmailLink = document.createElement("a")
  cardUserInfoEmailLink.href = `mailto:${user.email}`
  cardUserInfoEmailLink.textContent = user.email

  cardUserInfoEmail.appendChild(cardUserInfoEmailLink)
  cardUserInfoList.appendChild(cardUserInfoUsername)
  cardUserInfoList.appendChild(cardUserInfoEmail)
  card.appendChild(cardUserInfoList)

  const mapBody = document.createElement("div")
  mapBody.classList.add("card-body")

  const mapBodyDiv = document.createElement("div")
  mapBodyDiv.id = `map-${user.id}`
  mapBodyDiv.classList.add("card-map")

  setTimeout(() => {
    const map = L.map(mapBodyDiv, {
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      keyboard: false,
      layers: [
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
          minZoom: 0,
          maxZoom: 20,
          attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          ext: 'png'
        }),
        L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        })
      ]
    }).setView([user.address.geo.lat, user.address.geo.lng], 13);
    
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);
    const marker = L.marker([user.address.geo.lat, user.address.geo.lng]).addTo(map);
    marker.bindPopup(
      `<div class="userAddress">
      <p class="userStreet">${user.address.street}</p>
      <p class="userSuite">${user.address.suite}</p>
      <p class="userCityZip">${user.address.city}, ${user.address.zipcode}</p>
      </div>`
    ).openPopup();
  }, 0)

  mapBody.appendChild(mapBodyDiv)
  card.appendChild(mapBody)

  const cardBody = document.createElement('div')
  cardBody.classList.add('card-body')
  
  const cardBodyTitle = document.createElement('h5')
  cardBodyTitle.classList.add('card-title')
  cardBodyTitle.textContent = user.company.name

  const cardBodyText = document.createElement('p')
  cardBodyText.classList.add('card-text')
  cardBodyText.textContent = user.company.catchPhrase

  cardBody.appendChild(cardBodyTitle)
  cardBody.appendChild(cardBodyText)
  card.appendChild(cardBody)

  const cardFooter = document.createElement('div')
  cardFooter.classList.add('card-footer')

  const cardFooterLink1 = document.createElement('a')
  cardFooterLink1.classList.add('card-link')
  cardFooterLink1.href = `tel:${user.phone}`
  cardFooterLink1.textContent = user.phone

  const cardFooterLink2 = document.createElement('a')
  cardFooterLink2.classList.add('card-link')
  cardFooterLink2.href = user.website
  cardFooterLink2.textContent = user.website

  cardFooter.appendChild(cardFooterLink1)
  cardFooter.appendChild(cardFooterLink2)
  card.appendChild(cardFooter)

  return card
}
const createUserCol = (user, rowUsers) => {
  const userCardContainer = document.createElement("div")
  userCardContainer.classList.add("col-4", "my-3")
  const userCard = createUserCardReal(user)
  userCardContainer.appendChild(userCard)
  rowUsers.appendChild(userCardContainer)
}
const displayUsers = (users, rowUsers) => {
  users.forEach(user => createUserCol(user, rowUsers))
}
const search = (searchStr, users) => {
  const [searchKey, searchValue] = searchStr.split(':')
  // const searchKey = searchStr.split(':')[0]
  // const searchValue = searchStr.split(':')[1]
  users.filter(user => user[searchKey].includes())
  switch(searchKey) {
    case 'id':
      // for(let i=0; i<users.length; i++){
      //   const user = users[i]
      //   if (user.id === searchValue) {
      //     return [user]
      //   }
      // }
      // break;
      return users.filter(user => user.id === parseInt(searchValue))
    case 'name':
      return users.filter(user => user.name.toLowerCase().includes(searchValue))
    case 'username':
      return users.filter(user => user.username.toLowerCase().includes(searchValue))
    case 'fullname':
      return users.filter(user => getUserFullName(user).toLowerCase().includes(searchValue))
    case 'email':
      return users.filter(user => user.email.toLowerCase().includes(searchValue))
    case 'address':
      return users.filter(user => {
        const addresse = `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`
        return addresse.toLowerCase().includes(searchValue)
      })
    case 'phone':
      return users.filter(user => user.phone.toLowerCase().includes(searchValue))
    case 'website':
      return users.filter(user => user.website.toLowerCase().includes(searchValue))
    case 'company':
      return users.filter(user => user.company.name.toLowerCase().includes(searchValue))
    default:
      alert("Please enter a valid key")
      return users
  }
}
