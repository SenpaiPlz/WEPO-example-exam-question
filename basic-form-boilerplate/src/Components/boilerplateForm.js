import React from 'react'
import Input from './input'

const initState = {
    inputFields: {
        input1: '',
        input2: '',
        input3: ''
    },
    validatorFuncts: {
        input1: function(input) { return input !== ''},
        input2: function(input) { return input !== ''},
        input3: function(input) { return input !== ''}
    },
    errorFields: {
        input1: '',
        input2: '',
        input3: ''
    }
}

class BoilerplateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = initState
    }

    // Generic on input function
    onInput(e) {
        let inputFields = Object.assign({}, this.state.inputFields)
        let errorFields = Object.assign({}, this.state.errorFields)
        let validatorFuncts = Object.assign({}, this.state.validatorFuncts)
        inputFields[e.target.name] = e.target.value
        if(!validatorFuncts[e.target.name](e.target.value)) {
            errorFields[e.target.name] = 'Erorrororor'
        } else {
            errorFields[e.target.name] = ''
        }
        this.setState({inputFields, errorFields}, () => {
            console.log(this.state)
        })
    }

    // Generict on submit
    onSubmit(e) {
        e.preventDefault()
        // do some validation
        // reset state
    }

    render() {
        const { input1, input2, input3 } = this.state
        return (
            <div className="formWrapper">
                <Input
                onChange={e => this.onInput(e)}
                name='input1'
                value={input1}
                />
                <Input
                onChange={e => this.onInput(e)}
                name='input2'
                value={input2}
                />
                <Input
                onChange={e => this.onInput(e)}
                name='input3'
                value={input3}
                />
            </div>
        )
    }
}

export default BoilerplateForm