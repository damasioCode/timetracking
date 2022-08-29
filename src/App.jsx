import { useState, useEffect } from 'react'
import Card from './components/Card'
import UserCard from './components/UserCard'

import workImg from './assets/images/icon-work.svg'
import playImg from './assets/images/icon-play.svg'
import selfCareImg from './assets/images/icon-self-care.svg'
import socialImg from './assets/images/icon-social.svg'
import studyImg from './assets/images/icon-study.svg'
import exerciseImg from './assets/images/icon-exercise.svg'
import userImg from './assets/images/image-jeremy.png'


import Container from './components/Wrappers/Container'
import Wrapper from './components/Wrappers/Wrapper'
import CardWrapper from './components/Wrappers/CardWrapper'
import UserCardWrapper from './components/Wrappers/UserCardWrapper'

import userData from './data.json'

function App() {
  const [count, setCount] = useState(0)
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    setUserInfo(userData)
  }, [])

  return (
    <div className="App">
      <Container>
        <Wrapper>
          <UserCardWrapper>
            <UserCard
              name="Daniel Damasio"
              image={userImg}
            />
          </UserCardWrapper>

          <CardWrapper>
            <Card 
              title="Work"
              hours="32"
              lastWeek="36"
              icon={workImg}
              background="hsl(15, 100%, 70%)"
            />
            <Card 
              title="Play"
              hours="13"
              lastWeek="24"
              icon={playImg}
              background="hsl(195, 74%, 62%)"
            />
            <Card 
              title="Study"
              hours="3"
              lastWeek="4"
              icon={studyImg}
              background="hsl(348, 100%, 68%)"
            />
            <Card 
              title="Exercise"
              hours="5"
              lastWeek="4"
              icon={exerciseImg}
              background="hsl(145, 58%, 55%)"
            />
            <Card 
              title="Social"
              hours="2"
              lastWeek="5"
              icon={socialImg}
              background="hsl(264, 64%, 52%)"
            />
            <Card 
              title="Self Care"
              hours="21"
              lastWeek="18"
              icon={selfCareImg}
              background="hsl(43, 84%, 65%)"
            />
          </CardWrapper>
        </Wrapper>
      </Container>
    </div>
  )
}

export default App
