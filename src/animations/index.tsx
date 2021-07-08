const pageAnimation = {
  initial: {
    opacity: 0,
    x: '50vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: '-100vw',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const pageContainerAnimation = {
  exit: {
    backgroundColor: '#6C63FF',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const pageOneContainerAnimation = {
  exit: {
    backgroundColor: '#F50057',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const pageTwoContainerAnimation = {
  exit: {
    backgroundColor: '#F9A826',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export {
  pageAnimation, pageContainerAnimation, pageOneContainerAnimation, pageTwoContainerAnimation,
};
