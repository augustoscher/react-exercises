import ReactDOM from 'react-dom'
import React from 'react'
// import FirstComponent from './components/FirstComponent'
// import {CompA, CompB} from './components/TwoComponents'
// import MultiElements from './components/MultiElements'
import SomeFamily from './components/SomeFamily'
import Family from './components/Family'
import Member from './components/Member'
import FunctionalComponent from './components/FunctionalComponent'
import Father from './components/Father'
import ComponentClass from './components/ComponentClass'

const element = document.getElementById('root');
// ReactDOM.render('Hello React', element)
//JSX Code
// ReactDOM.render(<h1>Hello React</h1>, element)
// const jsx2 = <ul><li>Opção 1</li><li>Opção 2</li></ul>

ReactDOM.render(
    <div>
      <ComponentClass param="i'm a param"/>
      <ComponentClass/>
      {/* <FirstComponent name="This is a Name" lastName="This is LastName"/> */}
      {/* <CompA value="i'm component A"/> */}
      {/* <CompB value="i'm component B"/> */}
      {/* <MultiElements/> */}
      <Family>
        <Member name="Father" lastName="MyLastname"/>
        <Member name="Mother" lastName="MyLastname"/>
      </Family>
      <SomeFamily lastName="Test">
        <Member name="Father"/>
        <Member name="Son"/>
      </SomeFamily>
      <FunctionalComponent/>
      <Father/> 
    </div>
    , element)