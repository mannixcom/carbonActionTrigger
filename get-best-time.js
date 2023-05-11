// const axios = require("axios");
// const nodemailer = require("nodemailer");

// // const EMAIL_FROM = process.env.EMAIL_FROM;
// // const EMAIL_TO = process.env.EMAIL_TO;
// // const EMAIL_PASS = process.env.EMAIL_PASS;

// function bestTimeOfATask() {
//   const location = ['uksouth']
//   const now = new Date();
//   const dataStartAt = new Date(now.getTime() + 3 * 60000).toISOString();
//   const dataEndAt = new Date(now.getTime() + 243 * 60000).toISOString();
//   const windowSize = 30;  
//   const params = new URLSearchParams();
//   params.append('location', location);
//   params.append('dataStartAt', dataStartAt);
//   params.append('dataEndAt', dataEndAt);
//   params.append('windowSize', windowSize);

//   const url = `https://carbon-aware-api.azurewebsites.net/emissions/forecasts/current?${params.toString()}`;
//   console.log(url);
//   const headers = {
//     'Content-Type': 'application/json',
//   };
  
//   return axios.get(url, { headers, params })
//     .then(response => {
//       const averageEmissionsData = response.data;
//       const bestTime = averageEmissionsData[0].optimalDataPoints[0].timestamp;
//       console.log(`Best time: ${bestTime}`);
//       return bestTime;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// // bestTimeOfATask().then((bestTime) => {
// //   const transporter = nodemailer.createTransport({
// //     service: "gmail",
// //     auth: {
// //       user: EMAIL_FROM,
// //       pass: EMAIL_PASS,
// //     },
// //   });

// //   const mailOptions = {
// //     from: EMAIL_FROM,
// //     to: EMAIL_TO,
// //     subject: "Best Time of Task",
// //     text: `The best time of the task is ${bestTime}.`,
// //   };

// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.error(error);
// //     } else {
// //       console.log("Email sent: " + info.response);
// //     }
// //   });
// // });
