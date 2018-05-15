import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Action generator

const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter( ({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id = action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        default: 
            return state;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    starDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
              ...state,
              text: action.text  
            };         
        default:
            return state
    }
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo =  store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

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

// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     ...user, 
//     location: 'Philadelphia',
//     age: 27
// });

// console.log({
//     age: 89,
//     ...user
// });