function billPercentage(input1,input2){
    return Number((input1/100)*input2)
}

function totalBill(input1,newtip){
    return Number(input1) + Number(newtip)
}

function update(input1,input2,model){
    //const {billAmount,percentage} = model
    //const {percentage} = model
    //const {tip} = model
    //const {total} = model
    const newtip = billPercentage(input1,input2)
    const totalPrice = totalBill(input1,newtip)
    return {
        ...model,
        billAmount: input1,
        percentage: input2,
        tip: newtip,
        total: totalPrice

    }
}

module.exports = {
    update
}