import React from 'react'

export default class Counter extends React.Component {
    //tudo que é passado via props é readonly

    state = {
        number: this.props.number || 0
    }

    increment = () => {
        //não usar operador de pós incremento pois ele seta o valor na prorpriedade e 
        //acaba nao usando o setState
        this.changeNumber(1)
        // this.state.number++;
    }

    decrement = () => {
        this.changeNumber(-1)
        // this.state.number--;
    }

    changeNumber = (diference) => {
        this.setState({number: this.state.number + diference})
        // this.state.number--;
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.number}</div>
                {/* passa a referência da function para o onclick */}
                {/* precisa de uma arrow function por conta do contexto de execução do this */}
                <button onClick={this.increment}>Inc</button>
                <button onClick={() => this.changeNumber(10)}>Inc10</button>
                <button onClick={this.decrement}>Dec</button>
                <button onClick={() => this.changeNumber(-10)}>Dec10</button>
            </div>
        );
    }
}
//formas de fazer os métodos enxergarem o this como sendo a 
//propria classe e nao o contexto de execução do método

//1
// constructor(props){
//     super(props);
//     this.increment = this.increment.bind(this);
// }

//2
//usar arrow function pois ela assume o this como sendo o objeto da classe
//ela não tem contexto this de execução internamente.
//<button onClick={() => this.increment}>Inc</button>
//<button onClick={() => this.decrement}>Dec</button>

//3
//transformar a propria function em arrow function, que assume
//o this do objeto da classe como o seu contexto de execução.