import ReactDOM from 'react-dom'
import React from 'react'
import FirstComponent from './components/FirstComponent'
import {CompA, CompB} from './components/TwoComponents'
// import {MultiElements} from './components/MultiElements'

const element = document.getElementById('root');
// ReactDOM.render('Hello React', element)
//JSX Code
// ReactDOM.render(<h1>Hello React</h1>, element)
// const jsx2 = <ul><li>Opção 1</li><li>Opção 2</li></ul>

ReactDOM.render(
    <div>
        <FirstComponent name="This is a Name" lastName="This is LastName"/>
        <CompA value="i'm component A"/>
        <CompB value="i'm component B"/>
        {/* <MultiElements/> */}
    </div>
    , element)