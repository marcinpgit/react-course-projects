import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'sdfsdf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        starDate: undefined,
        endDate: undefined
    }
};