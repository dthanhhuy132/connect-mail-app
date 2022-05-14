import message from '../../mockData';

const getMailIdList = () => {
  let mailIdList = [];
  message.forEach((mail) => {
    if (!mailIdList[mail._id]) {
      mailIdList.push(mail._id);
    }
  });

  return mailIdList;
};

export default getMailIdList;
