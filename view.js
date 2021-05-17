const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip counter',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    return [
        {billAmount: billAmount},
        {"Tip (%)": percentage},
        {Tip: tip},
        {Total: total}

    ]
}

function inputForm(model){
    const {tip,billAmount} = model
    const message = 'Bill amount?'
    const message2 ='Tip(%)?'
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input',
            message: message,
            default: billAmount,
            validate: function(value){
                if(value > 0){
                    return true
                } else {
                    return 'Enter valid amount'
                }
            }
        },
        {
            name: 'input2',
            type: 'input',
            message: message2,
            default: tip,
            validate: function(value){
                if(value >= 0 && value <= 100){
                    return true
                } else {
                    return 'Enter valid percentage'
                }
            }
        }
    ])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}