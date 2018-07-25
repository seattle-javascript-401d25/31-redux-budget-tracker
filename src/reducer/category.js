import uuid from 'uuid/v4';

const example1 = {
  id: uuid(),
  createdOn: new Date(),
  name: 'Example name 1',
  budget: 100,
};

const example2 = {
  id: uuid(),
  createdOn: new Date(),
  name: 'Example name 2',
  budget: 200,
};

const emptyState = [example1, example2];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map(category => (payload._id === category._id ? payload : category));
    case 'CATEGORY_DELETE':
      return state.filter(category => payload._id !== category._id);
    default:
      return state;
  }
};
