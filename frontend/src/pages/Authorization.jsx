import { useEffect, useState } from "react"
import { HiEyeSlash, HiMiniEye } from "react-icons/hi2";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { TbUpload } from "react-icons/tb";
import { IoLogoGameControllerA } from "react-icons/io";

const Authorization = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [passVisibility, setPassVisibility] = useState(false)


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setPassword('')
    setFile('')
  }

  const handleChange = ({target}) => {
    setFile(target.files[0])
    target.value = ''
}


  useEffect(() => {
    console.log(file);
    
  }, [file])
  

  return (
    <div className="h-screen w-full flex items-center justify-center bg-accent">
      <div className="flex flex-col py-5 px-5 rounded-xl bg-accent w-96 shadow-custom-lg overflow-hidden">
        
        <h2 className="text-center font-semibold text-8xl text-[#141414] text-outline leading-9 pb-2 pt-7 font-outfit">Talker</h2>
        <p className="mt-4 text-center text-sm font-semibold text-color/30 font-outfit">{isRegistered ? 'Authorization' : 'Registration'}</p>

        <form onSubmit={submitHandler} className="flex flex-col gap-2 mt-8 text-color font-semibold">
          {!isRegistered && 
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required className="placeholder:text-[#141414]/20 placeholder:font-semibold py-2 px-2 shadow-custom-inset bg-accent rounded-md outline-none" />
          }
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="placeholder:text-[#141414]/20 placeholder:font-semibold py-2 px-2 shadow-custom-inset bg-accent rounded-md outline-none" />
          
          <div className="flex items-center w-full relative">
            <input onChange={(e) => setPassword(e.target.value)} value={password} type={passVisibility ? "text" : "password"} placeholder="Password" required className="placeholder:text-[#141414]/20 placeholder:font-semibold w-full py-2 px-2 shadow-custom-inset bg-accent rounded-md outline-none" />
            {passVisibility 
            ? <HiMiniEye
              onClick={() => setPassVisibility(prev => !prev)}
              className="absolute right-0 px-2 cursor-pointer w-[30px] h-[30px] text-[#141414]" /> 
            : <HiEyeSlash
              onClick={() => setPassVisibility(prev => !prev)}
              className="absolute right-0 px-2 cursor-pointer w-[30px] h-full text-[#141414]" />
            }
          </div>
          
          
          { !isRegistered &&
          // <div className="relative flex w-full max-w-sm flex-col gap-1 mt-4">
          //   <label className="w-fit pl-0.5 text-xs font-semibold text-color mb-1" htmlFor="fileInput">Profile photo</label>
          //   <input 
          //     id="fileInput" 
          //     type="file"
          //     className="w-full overflow-clip rounded-md border
          //     border-none bg-accent text-xs text-color font-semibold shadow-custom
          //     file:mr-4 py-[2px] px-[2px]
          //     file:border-none file:bg-accent file:px-4 
          //     file:py-[9px] file:font-sm file:font-semibold file:text-color 
          //     file:shadow-custom-inset cursor-pointer file:cursor-pointer"/>
          // </div>
            // FILE-input
            <div className="shadow-custom-inset relative">
              {/* UI for FILE-input */}
              <label htmlFor="fileInput" className="flex items-center w-full px-2 py-2 cursor-pointer" >
                {/* PLACEHOLDER-image / PICKED-FILE-image */}
                <div className="w-5 h-5 mr-1 rounded-md overflow-hidden">
                  <img src={file && URL.createObjectURL(file)} alt="userPhoto"
                  className={` w-full h-full object-cover object-center ${!file ? "opacity-0 scale-0 w-0 h-0 hidden" : "opacity-100 scale-100"} transition-all ease-in-out duration-300`} />
                  <MdPhotoSizeSelectActual className={`w-full h-full object-cover object-center ${!file ? "opacity-20 scale-100" : "opacity-0 scale-0 w-0 h-0 hidden"} transition-all ease-in-out duration-300`} />
                </div>
                {/* PLACEHOLDER / PICKED-IMAGE-NAME */}
                <span className="font-semibold opacity-20 select-none">{file ? file.name : 'Photo'}</span>
              </label>
              {/* Upload / Delete FILE */}
              <RiDeleteBack2Fill 
                onClick={() => setFile('')} 
                className={`absolute right-0 top-0 px-2 w-[30px] h-full z-50 text-[#141414] rounded-lg cursor-pointer ${file ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all ease-in-out duration-300`}
              />
              <TbUpload className={`absolute right-0 top-0 px-2 w-[30px] h-full z-50 text-[#141414] rounded-lg pointer-events-none ${!file ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all ease-in-out duration-300`}/>
              {/* hidden FILE-input */}
              <input onChange={(e) => handleChange(e)} type="file" id="fileInput" className="hidden" accept="image/*" />
            </div>
          }



          <button
            type="submit"
            className="mt-6 bg-accent shadow-custom active:shadow-custom-inset
            text-color font-semibold py-2 px-6 w-full self-center rounded-md"
          >
            {isRegistered ? 'Sign in' : 'Sign up'}
          </button>
          {
            isRegistered
            ? <p className="text-center mt-2 text-[#141414]/30">
                Make an account?{' '}
                <span 
                  onClick={() => setIsRegistered(prev => !prev)}
                  className="text-color font-semibold cursor-pointer">
                  Sign up
                </span>
              </p>
            : <p className="text-center mt-2 text-[#141414]/30">
                Already have an account?{' '}
                <span 
                  onClick={() => setIsRegistered(prev => !prev)}
                  className="text-color font-semibold cursor-pointer">
                  Login
                </span>
              </p>
          }
        </form>

      </div>
    </div>
  )
}

export default Authorization