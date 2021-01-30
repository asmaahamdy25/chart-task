import React from 'react'
import { Bar } from 'react-chartjs-2'

const Chart = ({ data }) => {
  return (

    <div className='chart-container'>

      <Bar

        data={data}
        options={{
          title: {
            display: true,
            text: 'Largest Cities In Massachusetts',
            fontSize: 25
          },
          legend: {
            display: true,
            position: 'bottom'
          },
          maintainAspectRatio: false
        }}
      />
    </div>

  )
}


export default Chart;