import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as expenseActions from '../../action/expense';
import ExpenseForm from '../expense-form/expense-form';

const mapDispatchToProps = dispatch => ({
  expenseUpdate: data => dispatch(expenseActions.updateExpense(data)), 
  expenseDelete: data => dispatch(expenseActions.deleteExpense(data)),
});

class Expense extends React.Component {
  render() {
    const {
      expense,
      category,
      expenseUpdate,
      expenseDelete,
    } = this.props;

    return (
      <li>
        <h3>{ expense.name }</h3>
        <ExpenseForm
          expense={ expense }
          onComplete={ expenseUpdate }
          category={ category }
        />
        <button onClick={() => {
          const payload = {
            category,
            expense,
          };

          expenseDelete(payload);
        }}/>
      </li>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  category: PropTypes.object,
  expenseUpdate: PropTypes.func,
  expenseDelete: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Expense);
