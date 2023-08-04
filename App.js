import React from 'react';
import './App.css';
import ClickMeGameProject from './Components/ClickMeGameProject';
// import ComponentD from './Components/ComponentD';
// import ComponentE from './Components/ComponentE';
// import ComponentF from './Components/ComponentF';
// import Timer from './Components/Timer';
// import FunctionalMousePointer from './Components/FunctionalMousePointer'
//  import MousePointer from './Components/MousePointer';
//import EmojiPicker from 'emoji-picker-react';
// import Navbar from './Components/Navbar';
// import ClassClick from './Components/ClassClick';
// import FunctionClick from './Components/FunctionClick';
// import Greet from './Components/Greet';
// import Message from './Components/Message';
// import Welcome  from './Components/Welcome';
// import NameList from './Components/NameList'
// import EmojiSearch from './Components/EmojiSearch';
// import ClassComponentCounter from './Components/ClassComponentCounter'
// import FunctionalComponentCounter from './Components/FunctionalComponentCounter';
export const UserContext = React.createContext();
function App() {
  
  return (
    <div className="App">
      <ClickMeGameProject/>
      {/* <UserContext.Provider value={'Uma'}>
        <ComponentD />
      </UserContext.Provider> */}
      {/* <ComponentE />
      <ComponentF /> */}
      {/* <Timer /> */}
      {/* <FunctionalMousePointer />
       <MousePointer /> */}
      {/* <ClassComponentCounter /> */}
      {/* <FunctionalComponentCounter /> */}
      {/* <Navbar /> */}
       {/* <EmojiPicker/> */}
      {/* <EmojiSearch /> */}
      {/* <NameList /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Message /> */}
      {/* <Greet name="Steve" heroName="Captain America"/>
      <Greet name="Tony" heroName="Ironman"/>
      <Greet name="Peter Parker" heroName="Spiderman"/>
      <Greet name="Jyo" heroName="Badki"/>
      <Welcome name="UMA"/> */}

    </div>
  );
}

export default App;
