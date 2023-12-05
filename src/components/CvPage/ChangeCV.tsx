import { useState, useRef } from 'react'
import html2canvas from 'html2canvas';
import { pdfjs } from 'react-pdf'
import jsPDF from 'jspdf';
import SideBar from './SideBar/SideBar'
import CVChoose from './CvChoose/CVChoose'
import Header from './Header/Header'

import "./ChangeCV.css"
import { useNavigate } from 'react-router-dom';

const ChangeCV = () => {
  const [cvId, setCvId] = useState<number>(1)
  const fileRef: any = useRef()
  const history = useNavigate()
  console.log(fileRef.current);
  
  
  const onClick = ({id}: any) => {
    setCvId(id)
  }

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.js',
      import.meta.url,
  ).toString();

  const handleDownload = async () => {
      // Render CV vào canvas sử dụng html2canvas
      await html2canvas(fileRef.current).then((canvas: any) => {
          // Chuyển canvas thành dữ liệu URL
          const dataURL = canvas.toDataURL("image/png");

          const doc = new jsPDF('p', 'mm', 'a4');
          const componentWidth = doc.internal.pageSize.getWidth()
          const componentHeight = doc.internal.pageSize.getHeight()
          doc.addImage(dataURL, 'PNG', 0, 0, componentWidth, componentHeight);
          doc.save("my-cv.pdf")
      })
  };

  const handleBack = () => {
    history(-1)
  }

  return (
    <>
      <section>
        <Header onClick={handleDownload} onBack={handleBack} />
      </section>
      <section className='change-cv-wrapper'>
        <SideBar onClick={onClick} />
        <CVChoose container={cvId !== 1} ref={fileRef} />
      </section>
    </>
  )
}

export default ChangeCV