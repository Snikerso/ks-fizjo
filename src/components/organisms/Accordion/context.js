import React, { createContext, useContext } from 'react';

const WordsCompoundContext = createContext({
  currentElement: null,
  setCurrentElement: () => null,
});

function AccordionProvider({ ...props}) {

  return <WordsCompoundContext.Provider  {...props} />
}

function useAccordionContext() {
  const context = useContext(WordsCompoundContext)
  if(!context){
    throw new Error('Context mus be used within a <Wizzard/>')
  }
  
  return context
}

export {AccordionProvider, useAccordionContext}
