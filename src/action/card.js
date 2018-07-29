import uuid from 'uuid/v4';

export const createCard = ({ content, sectionId }) => ({
  type: 'CARD_CREATE',
  payload: {
    content,
    sectionId,
    id: uuid(),
  },
});

export const updateCard = card => ({
  type: 'CARD_UPDATE',
  payload: card,
});

export const removeCard = card => ({
  type: 'CARD_REMOVE',
  payload: card,
});
