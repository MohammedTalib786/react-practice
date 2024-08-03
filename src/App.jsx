import React from 'react'
import UpdateObjs from './components/updater-functions/UpdateObjs'
import UpdateArrys from './components/updater-functions/UpdateArrys'
import UpdateArrysOfObjs from './components/updater-functions/UpdateArrysOfObjs'
import ColorPicker from './components/ColorPicker'
import Alert from './components/Alert'
import UpdaterFunc from './components/updater-functions/UpdaterFunc'
import PropAndTypes from './components/PropAndTypes'
import FunctionalLists from './components/FunctionalLists'
import UseStateHook from './components/hooks/use-state/UseStateHook'
import UseEffectHookOne from './components/hooks/use-effect/UseEffectHookOne'
import UseEffectHookTwo from './components/hooks/use-effect/UseEffectHookTwo'
import UseEffectHookThree from './components/hooks/use-effect/UseEffectHookThree'
import UseRefOne from './components/hooks/use-ref/UseRefOne'
import UseRefTwo from './components/hooks/use-ref/UseRefTwo'
import UseRefThree from './components/hooks/use-ref/UseRefThree'
import UseContextHook from './components/hooks/use-context/UseContextHook'
import OnchnagingInput from './components/on-change-handler/OnchnagingInput'
import OnchnagingInputTwo from './components/on-change-handler/OnchnagingInputTwo'
import FormHandling from './components/FormHandling'
import FetchFunc from './components/fetch-function/FetchFunc'

// FOR REACT ROUTER DOM

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './pages/component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <>
      <h2>App</h2>
      {/* <UpdateObjs /> */}
      {/* <UpdateArrys /> */}
      {/* <UpdateArrysOfObjs /> */}
      {/* <ColorPicker /> */}
      {/* <UpdaterFunc /> */}
      {/* <Alert /> */}
      {/* <FunctionalLists /> */}
      {/* <PropAndTypes /> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHookOne /> */}
      {/* <UseEffectHookTwo /> */}
      {/* <UseEffectHookThree /> */}
      {/* <UseRefOne /> */}
      {/* <UseRefTwo /> */}
      {/* <UseRefThree /> */}
      {/* <UseContextHook /> */}
      {/* <OnchnagingInput /> */}
      {/* <OnchnagingInputTwo /> */}
      {/* <FormHandling /> */}
      {/* <FetchFunc /> */}


      {/* ========================== React Router >>>>>>>>>>>>>>>>>> */}

      <Router>
        <Navbar />
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/contact-us' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>


    </>
  )
}

export default App