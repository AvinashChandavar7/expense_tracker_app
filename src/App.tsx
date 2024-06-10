import React from 'react'
import "./App.css"

import Heading from './components/ui/Heading/Heading';
import Box from './components/ui/Box/Box';
import ExpenseSummaryCharts from './components/charts/ExpenseSummaryCharts';

const App: React.FC = () => {
  return (
    <main>

      <div className='app__container'>
        <Heading title="Expense Tracker" className='heading_margin' />

        <div className='app__container--box'>
          <Box title='Wallet Balance' amount='4500' btn='Add Income' btnClassName='btn__primary--green' />
          <Box title='Expenses' amount='500' btn='Add Expense' btnClassName='btn__primary--red' />

          <ExpenseSummaryCharts />
        </div>
      </div>


    </main>
  )
}

export default App