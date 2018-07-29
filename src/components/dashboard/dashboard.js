import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/section';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';


// This is us grabbing the Redux store to make those props of this component
const mapStateToProps = (store) => {
  return {
    categories: store.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
    // dispatch({ type: 'category_CREATE', payload: stuff})
  };
};
class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((currentCategory, i) => <Category category={currentCategory} key={i} />)
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
