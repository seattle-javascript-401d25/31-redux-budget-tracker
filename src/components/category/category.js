import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/section';

import './category.scss';

class Category extends React.Component {
  render() {
    const {
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
          <CategoryForm category={category} onComplete={categoryUpdate}/>
          <button className="delete" onClick={() => categoryRemove(category)}>Delete</button>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Category);
