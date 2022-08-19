import type { NextPage } from 'next'
import { useState } from 'react'
import { Moment } from './moment'

const Home: NextPage = () => {
  const [date, setDate] = useState('')
  return (
    <div className="container">
      <div>
        <Moment />
      </div>
    </div>
  )
}

export default Home
