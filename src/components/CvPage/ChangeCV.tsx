import { useState } from 'react'
import SideBar from './SideBar/SideBar'
import CVChoose from './CvChoose/CVChoose'
import HeaderSearchhJob from '../layouts/HeaderSearchhJob'

import "./ChangeCV.css"
import Header from './Header/Header'

const ChangeCV = () => {
  const [cvId, setCvId] = useState<number>(1)
  
  const onClick = ({id}: any) => {
    setCvId(id)
  }

  return (
    <>
      <section>
        <Header />
      </section>
      <section className='change-cv-wrapper'>
        <SideBar onClick={onClick} />
        <CVChoose container={cvId !== 1} />
      </section>
    </>
  )
}

export default ChangeCV