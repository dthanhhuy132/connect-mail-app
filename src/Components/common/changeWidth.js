export default function changeWidthSize() {
  const leftItem = document.querySelector('.grab-to-change-size-left');
  const rightItem = document.querySelector('.grab-to-change-size-right');
  const headerEl = document.querySelector('.header');

  if (leftItem && rightItem && headerEl) {
    function disableTextSelect() {
      rightItem.classList.add('is-changing-size');
      leftItem.classList.add('is-changing-size');
    }

    function enableTextSelect() {
      rightItem.classList.remove('is-changing-size');
      leftItem.classList.remove('is-changing-size');
    }

    let isMouseDown = false;

    rightItem.addEventListener('mousedown', (e) => {
      isMouseDown = true;
    });

    let oldMouseX;
    rightItem.addEventListener('mousemove', (e) => {
      const limitLeft = e.clientX;
      let windowWidth = window.innerWidth;
      let rightItemReactDom = rightItem.getBoundingClientRect();
      const limitRight = rightItemReactDom.x + 5;

      if (e.pageX < oldMouseX) {
        console.log('giam');
      } else if (e.pageX > oldMouseX) {
        console.log('tang');
      }

      oldMouseX = e.pageX;

      console.log('oldMouseX', oldMouseX);

      if (limitLeft <= limitRight) {
        rightItem.style.cursor = 'col-resize';
      } else {
        rightItem.style.cursor = 'default';
      }

      const headerWidthRect = headerEl.getBoundingClientRect();
      const leftItemWidth = leftItem.getBoundingClientRect().width;
      const headerWidth = headerWidthRect.width;

      if (isMouseDown && leftItemWidth < 700 && limitLeft <= limitRight) {
        let rightWidth = windowWidth - limitLeft;

        disableTextSelect();

        rightItem.style.width = rightWidth + 'px';
        leftItem.style.width = limitLeft - headerWidth + 'px';
      }

      // if (isMouseDown && leftItemWidth > 300 && limitLeft <= oldMoustClientX) {
      //   console.log('oldMoustClientX', oldMoustClientX);
      //   let rightWidth = windowWidth + limitLeft;
      //   // rightItem.style.width = rightWidth + 'px';
      //   // leftItem.style.width = limitLeft - headerWidth + 'px';
      // }
    });

    rightItem.addEventListener('mouseup', (e) => {
      isMouseDown = false;
      enableTextSelect();
    });

    rightItem.addEventListener('mouseleave', (e) => {
      isMouseDown = false;
    });
  }
}
