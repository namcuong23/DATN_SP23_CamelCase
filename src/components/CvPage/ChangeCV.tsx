import { useState, useRef } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import { pdfjs } from 'react-pdf';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { message } from 'antd';

import { useSaveCVMutation } from '../../service/auth';
import { useAppSelector } from '../../app/hook';
import SideBar from './SideBar/SideBar'
import CVChoose from './CvChoose/CVChoose'
import Header from './Header/Header'

import "./ChangeCV.css"

const ChangeCV = () => {
  const [param] = useSearchParams()
  const templateId: any = param.get('templateId')
  const { email } = useAppSelector((res: any) => res.auth)
  const [cvId, setCvId] = useState<number>(+templateId || 1)
  const navigate = useNavigate()

  const fileRef: any = useRef()
  const history = useNavigate()
  
  const onClick = ({id}: any) => {
    setCvId(id)
  }

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.js',
      import.meta.url,
  ).toString();

  const handleDownload = async () => {
    await html2canvas(fileRef.current).then((canvas: any) => {
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

  const [saveCV] = useSaveCVMutation()
  const handleSave =  async () => {
    await saveCV({
      email,
      cvId
    }).then(({data: res}: any) => {
      message.success(res?.mes)
      navigate('/profile?tab=information')
    }).catch((err: any) => {
      message.error(err.message)
    })
  }

  return (
    <>
      <section>
        <Header onClick={handleDownload} onBack={handleBack} onSave={handleSave} />
      </section>
      <section className='change-cv-wrapper'>
        <SideBar onClick={onClick} />
        <CVChoose container={cvId !== 1} ref={fileRef} />
      </section>
    </>
  )
}

export default ChangeCV