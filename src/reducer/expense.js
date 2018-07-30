const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let categoryId;
  let previousExpenses;
  let updatedExpenses;
  let updatedState;

  switch (type) {
    case 'CATEGORY_CREATE':
      return { ...state, [payload._id]: [] };
    case 'CATEGORY_DELETE':
      updatedState = { ...state };
      delete updatedState[payload._id];
      return updatedState;
    case 'EXPENSE_CREATE':
      categoryId = payload.categoryId; // eslint-disable-line
      previousExpenses = state[categoryId];
      updatedExpenses = [...previousExpenses, payload];
      return { ...state, [categoryId]: updatedExpenses };
    case 'EXPENSE_UPDATE':
      console.log(payload, 'PAYLOAD');
      console.log(payload._id, 'PAYLOAD ID');
      categoryId = payload.categoryId; // eslint-disable-line
      previousExpenses = state[categoryId];
      console.log(previousExpenses, 'PREV EXPENSES');
      updatedExpenses = previousExpenses.map(expense => (expense.id === payload._id ? payload : expense));
      console.log(updatedExpenses, 'UPDATED EXPENSES');
      return { ...state, [categoryId]: updatedExpenses };
    case 'EXPENSE_REMOVE':
      categoryId = payload.categoryId; // eslint-disable-line
      previousExpenses = state[categoryId];
      updatedExpenses = previousExpenses.filter(expense => expense._id !== payload._id);
      return { ...state, [categoryId]: updatedExpenses };
    default: return state;
  }
};
