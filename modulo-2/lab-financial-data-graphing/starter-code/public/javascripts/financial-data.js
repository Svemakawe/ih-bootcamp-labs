const financialInfo = axios.create({
  baseURL: 'http://api.coindesk.com/v1/bpi/'
});

const dataTicket = 'historical/close.json';

const printTheChart = ((financialData) => {
  const dataLabels = Object.keys(financialData.bpi);
  const dataPrice = Object.values(financialData.bpi);
  console.log(dataLabels, dataPrice);
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataLabels,
      datasets: [{
        label: 'Bit Coin Chart',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataPrice
      }]
    }
  });
});

financialInfo.get(dataTicket)
  .then((response) => {
    printTheChart(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
