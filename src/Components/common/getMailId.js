import getMailIdList from "./getMailIdList";

const getMailId = (pathname) => {
  let mailId;
  let isMailIdValid = false;

  let mailIdList = getMailIdList()
  mailId = pathname.slice(
    pathname.lastIndexOf('/') + 1,
    pathname.length
  );

  if(mailIdList.indexOf(mailId)> -1 ) {isMailIdValid = true}


  return {mailId, isMailIdValid}
}

export default getMailId;