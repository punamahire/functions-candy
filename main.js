const buyChocolate = () => {
    const candy = {
        type: 'Milk chocolate'
    }
    return candy
}

const addFlavoring = (candy) => {
    candy.flavor = 'Mint'

}

const makeBarkMixture = (candy) => {
    if (candy.flavor === 'Mint') {
        candy.mixed = true 
    } else {
        candy.mixed = false
    }
}

const bakeCandy = (candy) => {
    if (candy.mixed == true) {
        candy.baked = true
    } else {
        candy.baked = false
    }
}

const breakBark = (candy) => {
    if (candy.baked == true) {
        const pieces = []
        for (let i = 0; i < 6; i++) {
            pieces.push('Mint Chocolate Bark Piece')
        }
        return pieces
    }
}

const makeCandy = () => {
    const newCandy = buyChocolate()
    addFlavoring(newCandy)
    makeBarkMixture(newCandy)
    bakeCandy(newCandy)
    return breakBark(newCandy)  // returns 6 pieces of the candy
}

// test output
console.log(makeCandy())
