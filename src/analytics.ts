let logged;

const sendAnalytics = (data: string) => {
  console.log(data);
  logged = true;
};
sendAnalytics('The data');
