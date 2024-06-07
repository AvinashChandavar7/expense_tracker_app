import React from 'react'
import Heading from './components/ui/Heading/Heading'
import { Button } from './components/ui/Button/Button'
import { FaPlus } from 'react-icons/fa'

const App: React.FC = () => {
  return (
    <div>
      <Heading title="Expense Tracker" />
      <Button text='Add Income' className='btn__primary--green' icon={<FaPlus className="icon" size={10} />} />
      <Button text='Add Expense' className='btn__primary--red' icon={<FaPlus className="icon" size={10} />} />
      <Button text='Add Expense' className='btn__primary--yellowishOrange' />
      <Button text='Cancel' variant='secondary' />
    </div>
  )
}

export default App