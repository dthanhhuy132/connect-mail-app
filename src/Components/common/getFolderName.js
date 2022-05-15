const folderSidebarText = ['inbox', 'personal', 'travel', 'finance', 'spam'];
const getFolderName = (pathname) => {
  let folderName;

  folderSidebarText.forEach((value) => {
    if (pathname.indexOf(value) > -1) {
      folderName = value;
    }
  });
  return folderName;
};

export default getFolderName;
