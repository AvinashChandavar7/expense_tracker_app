import React from 'react'
import Heading from './components/ui/Heading/Heading'
import { Button } from './components/ui/Button/Button'
import { FaPlus } from 'react-icons/fa'

const App: React.FC = () => {
  return (
    <div>
      <Heading title="Expense Tracker" />
      <Button text='Add Income' className='btn_primary--green' icon={<FaPlus className="icon" size={10} />} />
      <Button text='Add Expense' className='btn_primary--red' icon={<FaPlus className="icon" size={10} />} />
      <Button text='Add Expense' className='btn_primary--yellowishOrange' icon={<FaPlus className="icon" size={10} />} />
    </div>
  )
}

export default App