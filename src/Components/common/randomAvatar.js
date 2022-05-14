import huang from '../../assets/img/Huang.jpg';
import tuc from '../../assets/img/Tuc.jpg';
import fun from '../../assets/img/Fun.jpg';
import vun from '../../assets/img/Vun.jpg';
import huangOntheKnee from '../../assets/img/HuangOntheKnee.jpg';

export default function randomAvatar(name) {
  let avatarAray = [huang, tuc, fun, vun, huangOntheKnee];

  console.log(name);

  let rangeLetter = 25; //'a' - 'z'.charCodeAt()
  let avatarLength = avatarAray.length;

  let firstLetterName = name[0].toLowerCase();
  let charCode = firstLetterName.charCodeAt();

  let tempIndex = ((charCode - 97) / rangeLetter) * avatarLength;
  if (tempIndex === avatarLength) {
    tempIndex = avatarLength - 1;
  }

  return avatarAray[Math.round(tempIndex, 0)];
}
