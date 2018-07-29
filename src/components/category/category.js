import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/section';
import './category.scss';

import CardForm from '../card-form/card-form';
import Card from '../card/card';
import * as cardActions from '../../action/card';

const mapStateToProps = store => ({
  cards: store.cards,
});

const mapDispatchToProps = (dispatch) => {
  return {
    cardCreate: data => dispatch(cardActions.createCard(data)),
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

class Category extends React.Component {
  render() {
    const {
      // cards,
      // cardCreate,
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props; 
    return (
      <div className="category" key={key}>
        <div className="title-price">
          <h3 className="title"> { category.title }:</h3> 
          <h3>${category.price.toLocaleString({ style: 'currency' })}</h3>
        </div>
        <div>
          <button className="delete" onClick={() => categoryRemove(category)}>Delete</button>
          <CategoryForm category={category} onComplete={categoryUpdate}/>
        </div>
        <div className="card-form">
          <CardForm section={section} onComplete={cardCreate} />
          <div className="card-list">
            {
              sectionCards.map(card => <Card card={card} key={card.id} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  cards: PropTypes.object,
  cardCreate: PropTypes.func,
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
