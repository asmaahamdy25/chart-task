import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Chart from './Chart'
import Message from './Message'
import Loader from './Loader'
import { createChart, getChartList } from '../Actions/chartAction'

const initialList = [

];
const Home = () => {
  const [showSucess, setShowSucess] = useState(false)
  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch()
  const chartList = useSelector((state) => state.chartList)
  const { loading, error, charts } = chartList
  const chartCreate = useSelector((state) => state.chartCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    chart: createdChart,
  } = chartCreate
  useEffect(() => {
    if (successCreate) {
      setShowSucess(true)
    }
    dispatch(getChartList())
    setTimeout(
      () => {
        setShowSucess(false)
      }
      , 3000);
  }, [
    dispatch,
    createdChart,
    successCreate
  ])

  useEffect(() => {
    if (errorCreate) {
      setShowError(true)
    }
    setTimeout(
      () => {
        setShowError(false)
      }
      , 3000);
  }, [
    errorCreate
  ])

  const addChart = () => {
    const data =
    {
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets: [
        {
          label: 'Population',
          data: [
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor: [
            'rgba(0,0,255,1)',
            'rgba(0,0,255,1)',
            'rgba(0,0,255,1)',
            'rgba(0,0,255,1)',
            'rgba(0,0,255,1)',
            'rgba(0,0,255,1)',
            'rgba(0,0,255,1)',
          ]
        }
      ]
    }


    dispatch(createChart(data))

  }

  return (
    <>

      <div className='notification'>
        {showSucess ? <Message variant="filled" severity="success"> chart added successfully </Message>
          : null}
        {showError ? <Message variant="filled" severity="error"> Something wrong happened, please try again.</Message>
          : null}
      </div>
      <div className='main-container'>
        <div className='header-container'> <div>Internal Dashboard</div> <button onClick={addChart}>  + add Chart </button></div>
        <div className="grid-container" >


          {loading ? (
            <Loader />
          ) : (
              charts && charts.length === 0 ? <h3>There is no charts , Please add one </h3> : charts.map((item) => <div className="grid-item" key={item.id}><Chart data={item.data} /></div>)
            )}
        </div>
      </div>
    </>
  )
}

export default Home