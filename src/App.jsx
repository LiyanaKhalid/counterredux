
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
     <div className='d-flex align-items-center justify-content-center w-100 flex-column'
     style={{height:'100vh'}}
     >
      <div className='d-flex align-items-center justify-content-center flex-column p-5 rounded'
      style={{backgroundColor:'white'}}
      >
        <h2 className='text-primary'>Counter Application</h2>
        <Counter/>
      </div>
     </div>
    </>
  )
}

export default App
