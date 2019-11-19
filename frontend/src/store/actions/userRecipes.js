import {
  GET_USER_RECIPES_START,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAIL,
  DELETE_USER_RECIPE_START,
  DELETE_USER_RECIPE_SUCCESS,
  DELETE_USER_RECIPE_FAIL,
  UPDATE_USER_RECIPE_INPUT,
  UPDATE_USER_RECIPE_START,
  UPDATE_USER_RECIPE_SUCCESS,
  UPDATE_USER_RECIPE_FAIL,
  NEW_RECIPE_INPUT_UPDATE,
  CREATE_USER_RECIPE_START,
  CREATE_USER_RECIPE_SUCCESS,
  CREATE_USER_RECIPE_FAIL,
  SET_RECIPE_TO_EDIT
} from './actionTypes.js';

import axios from 'axios';

export const getUserRecipes = userString => dispatch => {
  dispatch({ type: GET_USER_RECIPES_START });
  console.log('GET USER RECIPES STARTED!!!!!!!!!!!!!');
  // if (userString) {
  axios
    .get(
      //`https://brewplans-production.herokuapp.com/userrecipes/user/${userString}`

      `https://backend-development-coffee.herokuapp.com/userrecipes/user/${userString}`
      //`https://backend-production-coffee.herokuapp.com/userrecipes/${userString}`
    )
    .then(res => {
      dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: res.data });
      console.log('Get res.data', res.data);
    })
    .catch(err => {
      console.log('HERE IS THE CATCH !!!!!!!!!!!!!!!!!!!!!!!!!!', err);
      dispatch({ type: GET_USER_RECIPES_FAIL, payload: err });
    });
  // }
  // } else {
  //   axios
  //     //.get(`https://backend-production-coffee.herokuapp.com/userrecipes/1`)
  //     .get(`https://backend-development-coffee.herokuapp.com/userrecipes/1`)
  //     .then(res => {
  //       dispatch({ type: GET_USER_RECIPES_SUCCESS, payload: res.data });
  //     })
  //     .catch(err => {
  //       dispatch({ type: GET_USER_RECIPES_FAIL, payload: err });
  //     });
  // }
};

export const deleteUserRecipe = recipeId => dispatch => {
  dispatch({ type: DELETE_USER_RECIPE_START });
  console.log("in deleteUserRecipe function")
  axios
    .delete(
      // `https://brewplans-production.herokuapp.com/userrecipes/${recipeId}`
      `https://backend-development-coffee.herokuapp.com/userrecipes/${recipeId}`
    )
    .then(res => {
      console.log('Delete res', res)
      dispatch({ type: DELETE_USER_RECIPE_SUCCESS, payload: recipeId });
    })
    .catch(err =>{
      console.log('Delete err', err)
      dispatch({ type: DELETE_USER_RECIPE_FAIL, payload: err })
    })
  };



export const handleRecipeEdit = (inputField, inputValue) => dispatch => {
  dispatch({
    type: UPDATE_USER_RECIPE_INPUT,
    payload: {
      type: inputField,
      value: inputValue
    }
  });
};

export const setRecipeToEdit = recipe_id => dispatch => {
  Axios.get(
    `https://backend-development-coffee.herokuapp.com/userrecipes/${recipe_id}`
  )
    .then(res => {
  console.log('set recipe to edit: recipe', recipe)
  dispatch({ type: SET_RECIPE_TO_EDIT, payload: res.data });
};

export const handleRecipeUpdate = (updatedRecipe, recipeId) => dispatch => {
  dispatch({ type: UPDATE_USER_RECIPE_START });
  axios
    .put(
      //`https://brewplans-production.herokuapp.com/userrecipes/${recipeId}`,
      `https://brewplans-development-coffee.herokuapp.com/userrecipes/${recipeId}`,
      updatedRecipe
    )
    .then(res => {
       console.log("Edit res", res);
      dispatch({ type: UPDATE_USER_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Edit err', err)
      dispatch({ type: UPDATE_USER_RECIPE_FAIL, payload: err });
      
    });
};

export const handleNewRecipeInput = (inputField, inputValue) => dispatch => {
  dispatch({
    type: NEW_RECIPE_INPUT_UPDATE,
    payload: {
      inputType: inputField,
      inputValue: inputValue
    }
  });
};

export const createUserRecipe = (newRecipe, userId) => dispatch => {
  dispatch({ type: CREATE_USER_RECIPE_START });
  newRecipe.userString = userId;
  // newRecipe.userString = '100GcdNaMWStDxhBPce5Pxg3lhY2';

  console.log('actions new recipe: ', newRecipe);

  axios
    .post(
      `https://backend-development-coffee.herokuapp.com/userrecipes/newrecipe`,
      //   `https://brewplans-production.herokuapp.com/userrecipes/newrecipe`,
      newRecipe
    )
    .then(res => {
      // console.log("res", res);
      dispatch({ type: CREATE_USER_RECIPE_SUCCESS, payload: res.data });
      getUserRecipes(userId);
    })
    .catch(err => {
      console.log('error', err);
      dispatch({ type: CREATE_USER_RECIPE_FAIL, payload: err });
    });
};
