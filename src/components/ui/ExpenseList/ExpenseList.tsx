import React from 'react'
import "./ExpenseList.css"
import Heading from '../Heading/Heading'
import { Button } from '../Button/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { IoPizzaOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { CiRollingSuitcase } from "react-icons/ci";
import { formatDate } from '../../../lib/utils';

const expenses = [
  {
    icons: <IoPizzaOutline size={15} />,
    title: 'Samosa',
    amount: 50,
    category: 'Food',
    date: '2024-06-10',
  },
  {
    icons: <GoGift size={15} />,
    title: 'Samosa',
    amount: 50,
    category: 'Food',
    date: '2024-06-10',
  },
  {
    icons: <CiRollingSuitcase size={15} />,
    title: 'Samosa',
    amount: 50,
    category: 'Food',
    date: '2024-06-10',
  },
];

const ExpenseList: React.FC = () => {
  return (
    <section className='expenseList__container'>
      <Heading title='Recent Transactions' className='heading_italic heading_margin' />

      <div className='expenseList__list'>
        <ul className='expenseList__list--ul'>
          {expenses.map((expense, index) => (
            <li key={index} className='expenseList__list--li'>
              <div className='expenseList__list--item'>
                <span className='expenseList__list--icons'>{expense.icons}</span>
                <div className='expenseList__list--details'>
                  <div>
                    <p className='expenseList__list--title'> {expense.title}</p>
                    <span className='expenseList__list--date'>{formatDate(expense.date)}</span>
                  </div>

                  <span><strong>${expense.amount}</strong> </span>

                </div>

              </div>

              <div className='expenseList__list--action'>
                <Button variant="icons" className='btn__icons--orange' icon={<FaEdit size={15} />} onClick={() => { }} />
                <Button variant="icons" className='btn__icons--red' icon={<FaTrash size={15} />} onClick={() => { }} />
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default ExpenseList