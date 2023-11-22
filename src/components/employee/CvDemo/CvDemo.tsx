import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import { useAppSelector } from '../../../app/hook';
import { useGetUserByEmailQuery } from '../../../service/auth';
import { NavLink, useSearchParams } from 'react-router-dom';
import "./CvDemo.css"
import { useGetCvQuery } from '../../../service/manage_cv';

const CvDemo = ({file}: any) => {
    const { email } = useAppSelector((res: any) => res.auth)
    const {data: user} = useGetUserByEmailQuery(email)
    const [params] = useSearchParams()
    const cvId = params.get('id')
    
    const [numPages, setNumPages] = useState<any>();

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();
    
    const onDocumentLoadSuccess = ({numPages}: any) => {
        setNumPages(numPages);
    }

    const {data: cvPdf} = useGetCvQuery(cvId)
    const pdfFile = cvPdf && `http://localhost:4000/files/${cvPdf.cv}`

    return (
        <>
            {/* {file && ( */}
                <section className='cv-preview' style={{
                    backgroundImage: 'url("https://www.topcv.vn/v4/image/cv_builder/background/bg_3.png")'
                }}>
                    
                    <section className="cv-preview__header">
                        <h1 className="cv-preview__title">
                            Xem CV Online của {user?.name}
                        </h1>
                        <a href={pdfFile} download={pdfFile} className='cv-preview__btn'>
                            <i className="fa-solid fa-download"></i>
                            <span>Tải CV PDF</span>
                        </a>
                    </section>
                    <Document 
                        file={pdfFile}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {
                            Array.from(
                                new Array(numPages),
                                (el, index) => (
                                    <Page 
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1} 
                                        width={800} 
                                        height={600}
                                        renderTextLayer={false} 
                                        renderAnnotationLayer={false} 
                                        className={(index+1) > 1 ? 'py-[36px] mb-[24px]' : 'mb-[24px]'}
                                    />
                                )
                            )
                        }
                    </Document>
                </section>
            {/* )}  */}
        </>
    )
}

export default CvDemo