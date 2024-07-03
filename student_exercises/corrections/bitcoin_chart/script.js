
const newChart = (labels, data) => {
  const ctx = document.getElementById('myChart');
  return new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Bitcoin VS USD',
            data: data,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }

    const drawChart = (chart, newLabel, newData) => {
      chart.data.labels.push(newLabel)
      chart.data.datasets[0].data.push(newData)
      chart.update()
    }

    const getDate = timestamp => {
      const date = new Date(timestamp)
      return date.toLocaleTimeString()
    }

    const labels = []
    const data = []
    const chart = newChart(labels, data)

    setInterval(() => {
      fetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT")
        .then(r => r.status === 200 ? r.json() : new Error("Request Error"))
        .then(p => {
          drawChart(chart, getDate(p.closeTime), p.price)
        })
        .catch(e => {
          console.error(e)
        })
    }, 1000)
  
    // TODO: every seconds fetch bitcoin vs usd data from binance : https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT