const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map(category => (category.id === payload.id ? payload : category));
    case 'CATEGORY_REMOVE':
      return state.filter(category => category.id !== payload.id);
    default:
      return state;
  }
};
