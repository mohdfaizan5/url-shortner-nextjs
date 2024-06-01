import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='p-10'>
      <h1 className='mb-10'>Analytics</h1>
      <Image src={"/undraw_data_report_re_p4so.svg"} height={200} width={200} alt=''/>
      
    </div>
  )
}

export default page