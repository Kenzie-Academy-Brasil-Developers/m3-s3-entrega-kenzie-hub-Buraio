import { Route, Routes } from 'react-router-dom';

const RouteMain = () => {

  return (
    <Routes>
      <Route path='/login' element={ <></> }/>
      <Route path='/register'/>
      <Route path='/dashboard'/>
    </Routes>
  )

}

export default RouteMain;