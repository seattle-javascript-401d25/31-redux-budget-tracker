import uuid from 'uuid/v4';

const create = ({ name, budget }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    id: uuid(),
    createdOn: new Date(),
    name,
    budget,
  },
});

const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

const destroy = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});

export { create, update, destroy };
