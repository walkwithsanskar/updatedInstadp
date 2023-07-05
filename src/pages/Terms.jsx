import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
const Terms = () => {
  return (
    <div className='text-2xl min-h-[100vh] max-h-fit bg-blue-500 pt-20 w-[100%] flex flex-row justify-center overflow-auto  lg:px-0 md:px-0 sm:px-0   px-3 '>

      <div className='lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]   flex flex-col justify-center items-center  scrollbar-hidden bg-blue-300 rounded-xl px-9 gap-4 mb-6 pb-3 '>

      <span  className='text-green-600 font-bold text-4xl border-b border-b-green-800' >Terms</span>
    
            <p className='text-base bg-green-100 px-2 py-4 rounded-md'>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.</p>
            <div className='flex flex-col px-3 py-2  w-[100%] items-stretch bg-blue-200 rounded-sm'>

        <div className='flex flex-col px-3 py-2 lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] items-stretch bg-blue-200 rounded-sm text-lg'>

    <Accordion>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Disclaimer
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                    <p className='text-base'>
                    The materials on InstaDp's website are provided 'as is.' InstaDp makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, InstaDp does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet website or otherwise relating to such materials or on any sites linked to this site.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Limitations
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    In no event shall InstaDp or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on InstaDp's Internet site, even if InstaDp or an authorized representative of InstaDp has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton >
                    Revisions and Errata
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-base'>
                    The materials appearing on InstaDp's website could include technical, typographical, or photographic errors. InstaDp does not warrant that any of the materials on its website are accurate, complete, or current. InstaDp may make changes to the materials contained on its website at any time without notice. InstaDp does not, however, make any commitment to update the materials.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton >
                    Site Terms of Use Modifications
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-base'>
                    InstaDp may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.

General Terms and Conditions applicable to Use of a Website.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    </div>
      </div>
    
    
    
    </div>
  )
}

export default Terms