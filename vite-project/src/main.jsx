import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       teget: "_blank",
//   },
//   children:"click me to visit google"
// }

const anotherElement= (
  <a href='https://google.com' target='_blank'>click here to visit google</a>
)
  
const anotherUser = "chai_aur_code"

const ReactElement = React.createElement(
  'a',
  {href: "https://google.com", target:"_blank"},
  'click me to visit',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App/>
  //  <MyApp />
   ReactElement
  // anotherElement
  //  anotherUser
  
)
