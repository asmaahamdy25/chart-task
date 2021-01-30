import {CREATE_CHART_FAIL,CREATE_CHART_SUCCESS,CREATE_CHART_REQUEST , CHART_LIST_REQUEST,CHART_LIST_SUCCESS,CHART_LIST_FAIL} from '../Constans/chartConstans'


export const chartCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_CHART_REQUEST:
        return {
          loading: true,
        }
      case CREATE_CHART_SUCCESS:
        return {
          loading: false,
          success: true,
          chart: action.payload
        }
      case CREATE_CHART_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }


  export const chartListReducer = (state = { charts: [] }, action) => {
    switch (action.type) {
      case CHART_LIST_REQUEST:
        return {
          loading: true,
        }
      case CHART_LIST_SUCCESS:
        return {
          loading: false,
          success: true,
          charts:action.payload
        }
      case CHART_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }