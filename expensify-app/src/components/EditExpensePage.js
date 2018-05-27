import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmint = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push(`/`);
    };

    removeExpense = (expense) => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push(`/`);
    };

    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={ this.props.expense }
                    onSubmit={ this.onSubmint }
                />
                <button onClick={ this.removeExpense }>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});


const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense()),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);