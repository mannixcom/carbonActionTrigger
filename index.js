const axios = require('axios');

async function bestTimeOfATask() {
  const location = ['uksouth'];
  const now = new Date();
  const dataStartAt = new Date(now.getTime() + 5 * 60000).toISOString();
  const dataEndAt = new Date(now.getTime() + 245 * 60000).toISOString();
  const windowSize = 30;
  const params = new URLSearchParams();
  params.append('location', location);
  params.append('dataStartAt', dataStartAt);
  params.append('dataEndAt', dataEndAt);
  params.append('windowSize', windowSize);

  const url = `https://carbon-aware-api.azurewebsites.net/emissions/forecasts/current?${params.toString()}`;
  console.log(url);
  const headers = {
    'Content-Type': 'application/json',
  };

  return axios
    .get(url, { headers, params })
    .then((response) => {
      const averageEmissionsData = response.data;
      console.log(averageEmissionsData[0].optimalDataPoints[0].timestamp);
      return averageEmissionsData;
    })
    .catch((error) => {
      console.error(error);
    });
}

 bestTimeOfATask();


