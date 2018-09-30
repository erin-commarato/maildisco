const apiURL = 'https://gq79ln1yi2.execute-api.us-east-1.amazonaws.com/';
const stage = 'dev';

const fetchMailbox = async email => {
  console.log('bout to fetch mailbox');
  await fetch(`${apiURL}${stage}/getMailbox`)
    .then(response => response.json())
    .then(data => console.log(data));
};

export default {
  fetchMailbox
};
