import React from 'react';

import ExpenseList from './ExpenseList';
import ExpanseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpanseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;