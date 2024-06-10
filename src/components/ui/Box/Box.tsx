import React from 'react'
import "./Box.css"
import { Button } from '../Button/Button';
import { FaPlus } from 'react-icons/fa';

interface BoxProps {
  title: string;
  amount: string;
  btn: string;
  btnClassName: string;
}

const Box: React.FC<BoxProps> = ({ title, amount, btn, btnClassName }) => {
  return (
    <div className='box__container'>
      <span>
        <h2>
          {title} : <strong className={title === "Wallet Balance" ? "box__container--green" : "box__container--red"}>₹{amount}</strong>
        </h2>
      </span>

      <Button text={btn} className={btnClassName} icon={<FaPlus className="icon" size={10} />} />
    </div>
  )
}

export default Box