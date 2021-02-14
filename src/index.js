import AppHeader from './components/AppHeader'
import createElement from './lib/createElement'
import './styles/_base.css'

document.body.append(AppHeader('JavaScript App Template'))

// Homepage

const HomePage = createElement('main')
HomePage.className = 'main'

const HomePageSection1 = createElement('div')
HomePageSection1.className = 'HomePageSection1'
HomePageSection1.innerHTML = `<p>  hier steht irgendwas </p> `

const HomePageSection2 = createElement('button')
HomePageSection2.className = 'HomePageSection2'
HomePageSection2.innerHTML = `<p>  hier steht irgendwas </p> `

const HomePageSection3 = createElement('div')
HomePageSection3.className = 'HomePageSection3'
HomePageSection3.innerHTML = `<p>  hier steht irgendwas </p> `

const HomePageSection4 = createElement('div')
HomePageSection4.className = 'HomePageSection4'
HomePageSection4.innerHTML = `<p>  hier steht irgendwas </p> `

HomePage.append(
  HomePageSection1,
  HomePageSection2,
  HomePageSection3,
  HomePageSection4
)
document.body.append(HomePage)

// Page 1

const Page1 = createElement('main')
Page1.className = 'main'

const Page1Section1 = createElement('div')
Page1Section1.className = 'Page1Section1'
Page1Section1.innerHTML = `<p>  hier steht irgendwas </p> `

const Page1Section2 = createElement('button')
Page1Section2.className = 'Page1Section2'
Page1Section2.innerHTML = `<p>  hier steht irgendwas </p> `

const Page1Section3 = createElement('div')
Page1Section3.className = 'Page1Section3'
Page1Section3.innerHTML = `<p>  hier steht irgendwas </p> `

const Page1Section4 = createElement('div')
Page1Section4.className = 'Page1Section4'
Page1Section4.innerHTML = `<p>  hier steht irgendwas </p> `

Page1.append(Page1Section1, Page1Section2, Page1Section3, Page1Section4)
document.body.append(Page1)

// Navigation

const NavBar = createElement('nav')
NavBar.className = 'NavBar__Container'

const NavBarButton1 = createElement('button', { className: 'NavBarButton1' })
const NavBarButton2 = createElement('button', { className: 'NavBarButton2' })
const NavBarButton3 = createElement('button', { className: 'NavBarButton3' })
const NavBarButton4 = createElement('button', { className: 'NavBarButton4' })

/* NavBarButton1.addEventlistener('click', () => {
  Page1.classList.add('hidden')
  console.log('höhöhö')
})

NavBarButton2.addEventlistener('click', () => {
  HomePage.classList.add('hidden')
}) */

NavBar.append(NavBarButton1, NavBarButton2, NavBarButton3, NavBarButton4)

document.body.append(NavBar)

/* 

button.addEventListener('click', () => onNavigate(text))

function onNavigate(text) {
    if (text === 'Home') {
      homePage.show()
      createPage.hide()
      header.setText('Homepage')
    }
  
    if (text === 'Create') {
      homePage.hide()
      createPage.show()
      header.setText('Create cards')
    }
  } */

/* navButtons.forEach(button => {
    const clickedButtonName = button.dataset.name // <button data-js="nav" data-name="home">Home</button>
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.name // <section data-js="page" data-name="home">...</section>
        page.classList.toggle('hidden', clickedButtonName !== pageName)
      })
      navButtons.forEach(button => {
        button.classList.toggle(
          'active-icon',
          clickedButtonName === button.dataset.name */
