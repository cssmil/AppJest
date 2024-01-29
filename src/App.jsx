import { FirstApp } from "./components/FirstApp"
import { CounterApp } from "./components/counterApp"

const App = () => {
  return (
    <>
      {/* <FirstApp title="Hi 👋,  soy Johnson"/> */}
      <CounterApp value={ 100 } name='Johnson' />
    </>
  )
}

export default App