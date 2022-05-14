import message from '../../mockData';

const getMailDetail = (mailId, isValidMailId) => {
  let mailDetail;

  if (!isValidMailId) {
    return false;
  }

  message.forEach((mail) => {
    if (mail._id === mailId) {
      mailDetail = mail;
    }
  });
  return mailDetail;
};

export default getMailDetail;
