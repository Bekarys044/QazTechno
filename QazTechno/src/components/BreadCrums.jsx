import { useNavigate } from "react-router-dom"



function BreadCrums({title}) {

    const navigate = useNavigate()

  return (
    <div className="container-custom my-10">
        <h1 className="text-xl text-gray-700 font-semibold  bg-clip-text bg-gradient-to-r from-blue-900 to-purple-400"> 
           <span className="cursor-pointer" onClick={() => navigate('/')}>
              Home
           </span>
           /
           <span className="cursor-pointer" onClick={() => navigate('/Proudct')} > 
              Products
           </span>
           / <span>{title}</span>
        </h1>
      
    </div>
  )
}

export default BreadCrums
