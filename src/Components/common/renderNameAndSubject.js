import message from '../../mockData';

const renderNameAndSubject = (mailId, isMailIdValid) => {
  let mailTarget;
  message.forEach((mail) => {
    if (mail._id === mailId) {
      mailTarget = mail;
    }
  });

  if (mailTarget && isMailIdValid) {
    console.log(mailTarget);

    return (
      <span className="text-gray-500 flex items-center gap-2">
        <span>{mailTarget.senderName.first + ' ' + mailTarget.senderName.lastName}</span> |
        <span className="text-gray-500 font-[300] w-[250px] overflow-hidden text-ellipsis whitespace-nowrap inline-block">
          {mailTarget.subject}
        </span>
      </span>
    );
  }
};

export default renderNameAndSubject;