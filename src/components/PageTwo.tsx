import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation, pageTwoContainerAnimation } from '../animations';
import Button from './Button';

export interface IPageProps {
    content: string,
    color: string
}

const PageTwo: React.FC<IPageProps> = ({ content, color }:IPageProps) => {
  const history = useHistory();
  return (
    <motion.div
      variants={pageTwoContainerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page center"
      style={{ backgroundColor: color }}
    >
      <motion.div variants={pageAnimation} className="page-container center">
        <div className="page-title">{content}</div>
        <Button text="Next" onClick={() => { history.push('/'); }} />
      </motion.div>
    </motion.div>
  );
};

export default PageTwo;
