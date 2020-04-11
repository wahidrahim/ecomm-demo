import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: '',
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS: {
      return {
        ...state,
        collections: action.collections,
        isFetching: false,
      }
    }
    case ShopActionTypes.FETCH_COLLECTION_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
      }
    }
    default: {
      return state
    }
  }
}

export default shopReducer
