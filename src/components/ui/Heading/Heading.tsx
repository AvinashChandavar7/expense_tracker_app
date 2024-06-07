import React from 'react';
import "./Heading.css"
import { cn } from '../../../lib/utils';

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, className }) => {
  return (
    <div className={cn("heading", className)}>
      {title}
    </div >
  )
}

export default Heading