export const series = [{
    data: [{
      x: 'Sat',
      y: [25, 35],
      
    }, {
      x: 'Sun',
      y: [10, 30]
    }, {
      x: 'Mon',
      y: [10, 60]
    }, {
      x: 'Tues',
      y: [5, 20]
    },
    {
        x: 'Wed',
        y: [30, 65]
      },
      {
        x: 'Thurs',
        y: [10, 45]
      },
      {
        x: 'Fri',
        y: [0, 25]
      }]
}]
export const options= {
  chart: {
    type: 'rangeBar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#2399fb","#28e0ff","yellow","#f6231b","#ffcc1a"]
}


