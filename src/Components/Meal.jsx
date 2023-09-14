import PropTypes from 'prop-types';

const Meal = ({meal,sendToStoreCart}) => {
    const {strCategoryThumb,strCategory,idCategory,strCategoryDescription} =meal;
    return (
        <div className="card">
            <img src={strCategoryThumb} alt=""  />
            <h3> Category Name: {strCategory}</h3>
            <p>{strCategoryDescription.slice(0, 120)}</p>
            <button onClick={()=>sendToStoreCart(idCategory)} className="Cart">Add to Cart</button>
        </div>
    );
};

Meal.propTypes ={
    meal: PropTypes.object.isRequired,
    sendToStoreCart : PropTypes.func.isRequired
}

export default Meal;