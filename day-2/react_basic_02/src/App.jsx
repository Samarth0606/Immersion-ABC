import Button from "./components/Button";
import First from "./components/First";
import Kuchbhi from "./components/Kuchbhi";
import Naam from "./components/Naam";

function App(){
  return (
    <div>
      <h1>Mai hu App</h1>
      {/* <Kuchbhi/ /> */}
      {/* <Button /> */}
      {/* <First /> */}
      <Naam name="kartik" age="21" favColor="Blue" isMarried={false}  />
    </div>
  )
}

export default App;