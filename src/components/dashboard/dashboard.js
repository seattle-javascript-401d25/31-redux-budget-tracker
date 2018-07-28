import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/section';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div className="TEST">
        <CategoryForm onComplete={categoryCreate} />
        <div className="category-container">
        {
          categories.map((currentCategory, i) => <Category category={currentCategory} key={i}/>)
        }
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    categories: store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
