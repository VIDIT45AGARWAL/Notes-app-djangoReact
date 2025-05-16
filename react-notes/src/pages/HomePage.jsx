import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'


const HomePage = ({notes}) => {
  console.log("HomePage notes:", notes);
  return (
    <>
        <Filter/>
        <NoteCardContainer notes={notes} />
    </>
  )
}

export default HomePage