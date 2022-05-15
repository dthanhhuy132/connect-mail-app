export default function getSubMainPage(pathname) {
  console.log(pathname);
  return pathname.split('/')[2];
}
