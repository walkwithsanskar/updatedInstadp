import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'

const Faq = () => {
  return (
    <div className='flex flex-col items-center mt-36 w-[100%]  bg-blue-200'>
     <span className='text-4xl text-white '> Faq's</span>
    
    <div className='flex flex-col px-3 py-2 lg:w-[60%] md:w-[60%] sm:w-[60%] w-[100%] items-stretch bg-blue-200 rounded-sm'>

    <Accordion>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How Will You Download Instagram Profile Pictures From A Different Account?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                    <p>
                    Instagram is an effective social media platform to share interesting videos as well as stories in different fields like business, entertainment as well as much more. This tool lets you view profiles with real quality as well as save images in the desired location on the device. Then it lets you zoom different posts posted by different account holders. If you come to a user profile photo, you cannot zoom in as well as download it. To come out from this problem, the user is suggested to go with the finished size of profile picture downloader. This downloader is applicable to run free of cost, as well as it needs to submit account user names to collect photographs. The tool is highly secured as well as anonymous, as well as it is respected with more important privacy. Hence it helps to create effective tools as well as store private information.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How will you save a profile picture from your Instagram account?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Upon entering the username click on to get zoom profilepic and then donwload  button  will appear on top of image
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton >
                    What is the reason for downloading Instagram profile pictures?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-base'>
                    The most important reason behind this downloading is to add Instagram as well as profile look private. the customer never searches out as well as identifies a person based on a tiny profile picture. When you are a single person, try Instagram to find out about new people. This app is more helpful to derive more followers. Even it can zoom in on their representation to get a closer as well as quality look at all times. This downloader is the right option to save as well as find detailed pictures with top quality as well as suitable size. This tool works much faster to create a process for finding out other things that follow someone on the backside. It is also considered a business account, so customers understand different motives for saving profile pictures over their respective device. Users need to utilize company logos or other personal information. You are suggested to make a complete landscape depiction as well as use someone's profile image with no trouble. You can check out this link to get a complete solution. This tool is built with several additional features that help customers choose as well as get first-class ideas as well as promote picture winning. Hence you can simply collect profile photographs on instagram without any trouble.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>
    </div>

  )
}

export default Faq