import React from 'react'

const InformationComponent = ({title, id, desc, btn_value, onClick}: any) => {
  return (
    <>
        <section className='w-100 border-1 rounded bg-white py-[20px] mt-[8px] px-[24px]'>
            <h4 className="text-[22px]">{title}</h4>
            <p className='text-[12px]'><i>{desc}</i></p>
            <label htmlFor='modal-form-check' className='text-[#005aff]' onClick={() => onClick({title, id})}>
                <i className="fa-solid fa-plus border-[1px] border-[#005aff] p-[3px] rounded-full"></i>
                <span className='ml-[8px]'>{btn_value}</span>
            </label>
        </section>
    </>
  )
}

export default InformationComponent