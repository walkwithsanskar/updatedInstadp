import React from 'react'

const Privacy = () => {
  return (
    <div className='text-2xl min-h-[100vh] max-h-fit bg-blue-500 pt-20 w-[100%] flex flex-row justify-center  overflow-auto   lg:px-0 md:px-0 sm:px-0   px-3'>
            <div className='lg:w-[60%] md:w-[60%] sm:w-[60%] w-[100%] flex flex-col  items-center  scrollbar-hidden bg-blue-300 rounded-xl px-4 pb-5 mb-5 gap-6'>
            <span className='text-green-600 font-bold text-4xl border-b border-b-green-600' >Privacy-Policy</span>
    <p className='text-lg text-blue-800'>Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.</p>
    <p className='text-lg text-blue-800'> Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</p>


    <p className='text-lg text-blue-800'>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</p>
    <p className='text-lg text-blue-800'>We will only retain personal information as long as necessary for the fulfillment of those purposes.</p>
    <p className='text-lg text-blue-800'>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</p>
    <p className='text-lg text-blue-800'>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</p>
    <p  className='text-lg text-blue-800'> We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
            </div>
    </div>
  )
}

export default Privacy