import Appel from './appel'
import './App.css'
import Orange from './orange'
import Card from './Card'
import logo from './assets/react.svg'

const person = [
  {
     "fullName": "John Doe",
      "bio": "A software engineer with a passion for technology.",
      "imgSrc": 'https://randomuser.me/api/portraits/men/88.jpg',
      "profession": "Software Engineer",
      "shows": true
    },
  {
     "fullName": "Alexia Doe",
      "bio": "A software engineer with a passion for technology.",
      "imgSrc":'https://randomuser.me/api/portraits/women/64.jpg',
      "profession": "Software Engineer",
      "shows": true
    },
  {
     "fullName": "Amanda Doe",
      "bio": "A software engineer with a passion for technology.",
      "imgSrc": 'https://randomuser.me/api/portraits/women/90.jpg',
      "profession": "Software Engineer",
      "shows": false
    },
  {
     "fullName": "Aicha Doe",
      "bio": "A software engineer with a passion for technology.",
      "imgSrc": 'https://randomuser.me/api/portraits/women/54.jpg',
      "profession": "Software Engineer",
      "shows": true
    },
  {
     "fullName": " Clarence Doe",
      "bio": "A software engineer with a passion for technology.",
      "imgSrc": 'https://randomuser.me/api/portraits/men/75.jpg',
      "profession": "Software Engineer",
      "shows": false
    },

]

function App() {
 
  return (
    <>
    <Card data={person}/>
    
    <Appel number="3" color ="green" logo={logo}/>
    <Orange number="4" color="tomato"/>
    </>
  )
}

export default App
