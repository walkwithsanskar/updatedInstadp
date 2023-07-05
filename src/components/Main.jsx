import React, { useState, useEffect, useRef } from 'react';
import { GrDownload } from 'react-icons/gr';
import {apiConnector} from "../services/apiConnector"
import {getProfileEndPoint} from "../services/api"
import Faq from './Faq';
import Spinner from './Spinner';
const Main = () => {
    const {profileApi} = getProfileEndPoint;
  const [userName, setUserName] = useState('');
  const [errorText,setErrorText]= useState("");
  const inputRef = useRef(null);
  const [loading , setLoading] = useState(false);  
  const [profileData,setProfileData] = useState("");
  const formHandler = (event) => {
    event.preventDefault();
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((pastedText) => {
      setUserName(pastedText);
    });
  };

    const handleClear =() =>{
        setUserName("");
        setErrorText("");
        setProfileData("");
    }

  const downloadHandler = async () =>{
                setLoading(true);
                setErrorText("");
                if(userName===""){
                    setErrorText("please enter a valid username first");
                    setLoading(false);
                }else{

                    try{
    
                        const response = await apiConnector("POST",profileApi,{targetUsername:userName});
                        if(response?.data?.success===true){
                            setProfileData(response?.data);
                            
                            setLoading(false);
                        }else{
                            
                            setErrorText("please enter a valid username or try after a few minutes")
                            console.log("could not fetch results")
                            setLoading(false);
                        }
                    }catch(error){
                        setErrorText("please enter a valid username or try after a few minutes")
                        console.log(error)
                        setLoading(false);
                    }
                }
  }

  return (
    <div className='flex flex-col gap-6 bg-blue-600 w-[100%]  items-center pt-8 lg:px-0 md:px-0 sm:px-0 px-1 min-h-[95vh]'>
 
      <div className='flex flex-col gap-1 items-center text-white pt-8'>
        <h1 className='text-white lg:text-5xl text-center md:text-4xl sm:text-3xl text-2xl'>Instagram Profile Pic Zoom</h1>
        <span className='lg:text-2xl md:text-xl sm:text-xl text-sm text-center'>Without Watermark. Fast Download .  On All devices</span>
      </div>
      <form onSubmit={formHandler} className='lg:w-[60%]  md:w-[60%] sm:w-[60%] w-[100%] flex flex-row gap-1 flex-wrap'>
        <div className='relative w-[100%]'>
          <input
            ref={inputRef}
            type='text'
            placeholder='Enter Username To Search'
            className='w-[100%] appearance-none px-2 py-3 rounded-md' value={userName}
            onChange={(event) => setUserName(event.target.value)}

            onKeyDown={(event) => {
              if (event.key === "Enter") {
                downloadHandler;
              }
            }}



              />
          {userName=="" && <button
            className='px-2 py-2 bg-green-300 absolute right-[10px] top-[3px] rounded-md'
            onClick={handlePaste}
          >
            Paste
          </button>}
          {userName!=="" && <button
            className='px-2 py-2 bg-green-300 absolute right-[10px] top-[3px] rounded-md'
            onClick={handleClear}
          >
            clear
          </button>}
        </div>
        <button className='bg-green-500 px-2 py-3 text-white flex flex-row items-center gap-1 text-lg lg:min-w-[200px] md:min-w-[200px] sm:min-w-[200px] min-w-full justify-center flex-grow hover:bg-green-600 duration-200' onClick={downloadHandler}>

          { !loading && <><GrDownload /> <span>Get Zoomed Image</span></>}
          {loading && <Spinner/> }

        </button>
      </form>
      {
        errorText!=="" && <span className='text-xl text-center text-red-200'>{errorText}</span>
      }

      {
        profileData!=="" && <div className='flex flex-col items-center lg:w-[60%] md:w-[60%] sm:w-[60%] w-[100%]'>
            <button className='bg-green-500 px-2 py-3 text-white flex flex-row items-center gap-1 text-lg lg:min-w-[120px]  md:min-w-[120px] sm:min-w-[120px] min-w-full justify-center flex-grow self-stretch hover:bg-green-600 duration-200' > 
            <a download href={profileData?.image} className='flex-grow'>Download Image</a>
            </button>
            <img src={profileData?.image} className='shadow-2xl rounded-sm' alt="" />
        </div>
      }

      
      <Faq/>


    </div>
  );
};

export default Main;
