import { useState } from "react"

import { HiEyeSlash, HiMiniEye } from "react-icons/hi2";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { TbUpload } from "react-icons/tb";

const Authorization = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [passVisibility, setPassVisibility] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState('')


// FORM BUTTON
  const submitHandler = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setPassword('')
    setFile('')
  }
// FORM FILE INPUT
  const handleChange = ({target}) => {
    setFile(target.files[0])
    target.value = ''
}
  

  return (
    <div className="">
      <div className="h-screen w-full flex items-center justify-center bg-light-bg dark:bg-dark-bg">
        <div className="flex flex-col py-5 px-5 rounded-lg bg-light-bg dark:bg-dark-bg w-96 shadow-custom-light dark:shadow-custom-dark overflow-hidden">

          <h2 className="text-center font-semibold text-8xl text-dark-text dark:text-light-text text-outline-light dark:text-outline-dark leading-9 pb-2 pt-7 font-outfit">Talker</h2>
          <p className="mt-4 text-center text-sm font-semibold text-dark-text dark:text-light-text font-outfit">{isRegistered ? 'Authorization' : 'Registration'}</p>

          <form onSubmit={submitHandler} className="flex flex-col gap-2 mt-8 text-dark-text dark:text-light-text font-semibold text-sm">
            {!isRegistered && 
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required className="placeholder:text-dark-text/20 dark:placeholder:dark:text-light-text/20 placeholder:font-semibold py-2 px-2 shadow-custom-light-inset dark:shadow-custom-dark-inset bg-light-bg dark:bg-dark-bg rounded-md outline-none" />
            }
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="placeholder:text-dark-text/20 dark:placeholder:dark:text-light-text/20 placeholder:font-semibold py-2 px-2 shadow-custom-light-inset dark:shadow-custom-dark-inset bg-light-bg dark:bg-dark-bg rounded-md outline-none" />

            <div className="flex items-center w-full relative">
              <input onChange={(e) => setPassword(e.target.value)} value={password} type={passVisibility ? "text" : "password"} placeholder="Password" required className="w-full placeholder:text-dark-text/20 dark:placeholder:dark:text-light-text/20 placeholder:font-semibold py-2 px-2 shadow-custom-light-inset dark:shadow-custom-dark-inset bg-light-bg dark:bg-dark-bg rounded-md outline-none" />
              {passVisibility 
              ? <HiMiniEye
                onClick={() => setPassVisibility(prev => !prev)}
                className="absolute right-0 px-2 cursor-pointer w-[30px] h-[30px] text-dark-text dark:text-light-text" /> 
              : <HiEyeSlash
                onClick={() => setPassVisibility(prev => !prev)}
                className="absolute right-0 px-2 cursor-pointer w-[30px] h-full text-dark-text dark:text-light-text" />
              }
            </div>
            
            
            { !isRegistered &&
            // <div className="relative flex w-full max-w-sm flex-col gap-1 mt-4">
            //   <label className="w-fit pl-0.5 text-xs font-semibold text-color mb-1" htmlFor="fileInput">Profile photo</label>
            //   <input 
            //     id="fileInput" 
            //     type="file"
            //     className="w-full overflow-clip rounded-md border
            //     border-none bg-accent text-xs text-color font-semibold shadow-custom-light
            //     file:mr-4 py-[2px] px-[2px]
            //     file:border-none file:bg-accent file:px-4 
            //     file:py-[9px] file:font-sm file:font-semibold file:text-color 
            //     file:shadow-custom-light-inset cursor-pointer file:cursor-pointer"/>
            // </div>
              // FILE-input
              <div className="shadow-custom-light-inset dark:shadow-custom-dark-inset rounded-md relative">
                {/* UI for FILE-input */}
                <label htmlFor="fileInput" className="flex items-center w-full px-2 py-2 cursor-pointer" >
                  {/* PLACEHOLDER-image / PICKED-FILE-image */}
                  <div className="w-5 h-5 mr-1 rounded-md overflow-hidden">
                    <img src={file && URL.createObjectURL(file)} alt="userPhoto"
                    className={` w-full h-full object-cover object-center ${!file ? "opacity-0 scale-0 w-0 h-0 hidden" : "opacity-100 scale-100"}`} />
                    <MdPhotoSizeSelectActual className={`w-full h-full object-cover object-center text-dark-text/20 dark:text-light-text/20 ${!file ? "opacity-100 scale-100" : "opacity-0 scale-0 w-0 h-0 hidden"}`} />
                  </div>
                  {/* PLACEHOLDER / PICKED-IMAGE-NAME */}
                  <span className="font-semibold text-dark-text/20 dark:text-light-text/20 select-none">{file ? file.name : 'Photo'}</span>
                </label>
                {/* Upload / Delete FILE */}
                <RiDeleteBack2Fill 
                  onClick={() => setFile('')} 
                  className={`absolute right-0 top-0 px-2 w-[30px] h-full z-50 text-dark-text dark:text-light-text rounded-lg cursor-pointer ${file ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                />
                <TbUpload className={`absolute right-0 top-0 px-2 w-[30px] h-full z-50 text-dark-text dark:text-light-text rounded-lg pointer-events-none ${!file ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}/>
                {/* hidden FILE-input */}
                <input onChange={(e) => handleChange(e)} type="file" id="fileInput" className="hidden" accept="image/*" />
              </div>
            }



            <button
              type="submit"
              className="mt-6 text-dark-text dark:text-light-text shadow-custom-light dark:shadow-custom-dark  active:shadow-custom-light-inset dark:active:shadow-custom-dark-inset
              text-color font-semibold py-2 px-6 w-full self-center rounded-md"
            >
              {isRegistered ? 'Sign in' : 'Sign up'}
            </button>
            {
              isRegistered
              ? <p className="text-center mt-2 text-dark-text/30 dark:text-light-text/30">
                  Make an account?{' '}
                  <span 
                    onClick={() => setIsRegistered(prev => !prev)}
                    className="text-dark-text dark:text-light-text font-semibold cursor-pointer">
                    Sign up
                  </span>
                </p>
              : <p className="text-center mt-2 text-dark-text/30 dark:text-light-text/30">
                  Already have an account?{' '}
                  <span 
                    onClick={() => setIsRegistered(prev => !prev)}
                    className="text-dark-text dark:text-light-text font-semibold cursor-pointer">
                    Login
                  </span>
                </p>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Authorization
