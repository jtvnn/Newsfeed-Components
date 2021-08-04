// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
function menuMaker(menuArray) {
  menu = document.createElement('div')
  list = document.createElement('ul')
  item1 = document.createElement('li')
  item2 = document.createElement('li')
  item3 = document.createElement('li')
  item4 = document.createElement('li')
  item5 = document.createElement('li')
  item6 = document.createElement('li')

  menu.appendChild(list)
  list.appendChild(item1)
  list.appendChild(item2)
  list.appendChild(item3)
  list.appendChild(item4)
  list.appendChild(item5)
  list.appendChild(item6)

  menu.classList.add('menu')

  item1.textContent = menuArray[0]
  item2.textContent = menuArray[1]
  item3.textContent = menuArray[2]
  item4.textContent = menuArray[3]
  item5.textContent = menuArray[4]
  item6.textContent = menuArray[5]

  const menuButton = document.querySelector('.menu-button')

  menuButton.addEventListener('click', (event) => {
    menu.classList.toggle('menu--open')
  })

  return menu
}

const menuList = document.querySelector('.header')

const menus = menuMaker(menuItems)
menuList.appendChild(menus)