import {CREATE_CHART_FAIL,CREATE_CHART_REQUEST,CREATE_CHART_SUCCESS ,CHART_LIST_FAIL,CHART_LIST_REQUEST,CHART_LIST_SUCCESS} from '../Constans/chartConstans'
import axios from 'axios'
export const createChart = (chart) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_CHART_REQUEST })

      const { data } = await axios.post(`https://601572f355dfbd00174ca487.mockapi.io/api/v1/chart/chartData`, {data :chart})
      dispatch({ type: CREATE_CHART_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: CREATE_CHART_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const getChartList = () => async (dispatch) => {
    try {
      dispatch({ type: CHART_LIST_REQUEST})

      const { data } = await axios.get(`https://601572f355dfbd00174ca487.mockapi.io/api/v1/chart/chartData`)
      console.log(data)
      dispatch({ type: CHART_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: CHART_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }