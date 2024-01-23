const action = {
    type: "INCREASE",
    payload: 5
    // type:"DECREASE"
}

function counterReducer(state, action) {
    switch (action.type) {
        case "INCREASE":
            return { ...state, count: state + action.payload }
        case "DECREASE":
            return { ...state, count: state - action.payload }
        default:
            return state
    }
}

const result = counterReducer(10, action)
console.log(result)