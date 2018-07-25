import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';

class Landing extends React.Component {
  render() {
    const { categorys, categoryCreate } = this.props;
    return (
      <div>
        <CategoryForm onComplete={categoryCreate} />
        <ul>
        {
          categorys.map((currentCategory, i) => <CategoryItem category={currentCategory} key={i} />)
        }
        </ul>
      </div>
    );
  }
}

Landing.propTypes = {
  categorys: PropTypes.array,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    categorys: store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
