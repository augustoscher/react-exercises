import ReactDOM from 'react-dom'
import React from 'react'
import FirstComponent from './components/FirstComponent'

const element = document.getElementById('root');
// ReactDOM.render('Hello React', element)
//JSX Code
// ReactDOM.render(<h1>Hello React</h1>, element)
// const jsx2 = <ul><li>Opção 1</li><li>Opção 2</li></ul>

ReactDOM.render(
    <div>
        <FirstComponent></FirstComponent>
    </div>
    , element)