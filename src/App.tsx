import { Navbar } from "./Component/Navbar"
import { MyForm } from "./Component/loginForm"

import {Routes, Route} from 'react-router-dom'
import { Profile } from "./Component/profilePage"

export const App=()=> {

  return (
   <div>
       <Navbar/>
       <Routes>
          <Route path="/" element={<MyForm/>} />
          <Route path="/profile" element={<Profile/>}/>
         </Routes>
   </div>
  )
}


