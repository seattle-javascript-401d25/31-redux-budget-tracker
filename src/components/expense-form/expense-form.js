import React from 'react';
import PropTypes from 'prop-types';
import './expense-form.scss';

const emptyState = {
  name: '',
  price: 0,
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category._id : this.props.expense.sectionId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';
    const formText = expense ? `Update ${expense.name} Expense` : 'Create Expense';
    
    return (
      <form
        className="expense-form"
        data-cy="expense-form"
        onSubmit={ this.handleSubmit }
      >
        <label htmlFor="name">{ formText }</label>
        <input 
          type="text"
          name="name"
          placeholder="Enter New Expense Information"
          value={ this.state.name }
          onChange={ this.handleChange }
        />
        <label htmlFor="price">{ formText }</label>
        <input 
          type="number"
          name="price"
          min="0"
          value={ this.state.price }
          onChange={ this.handleChange }
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};
