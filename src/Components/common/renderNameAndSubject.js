import message from '../../mockData';

const renderNameAndSubject = (mailId, isMailIdValid) => {
  let mailTarget;
  message.forEach((mail) => {
    if (mail._id === mailId) {
      mailTarget = mail;
    }
  });

  if (mailTarget && isMailIdValid) {
    return (
      <span className="text-gray-500 flex items-center gap-2">
        <span>{mailTarget.senderName.first + ' ' + mailTarget.senderName.last}</span> |
        <span className="text-gray-500 font-[300] ">{mailTarget.subject}</span>
      </span>
    );
  }
};

// w-[250px] overflow-hidden text-ellipsis whitespace-nowrap inline-block

export default renderNameAndSubject;
