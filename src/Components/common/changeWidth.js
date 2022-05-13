export default function changeWidthSize() {
  // const grabItem = document.querySelector('.grab-to-change-size');
  const leftItem = document.querySelector('.grab-to-change-size-left');
  const rightItem = document.querySelector('.grab-to-change-size-right');
  const headerEl = document.querySelector('.header');

  if (leftItem && rightItem && headerEl) {
    // console.log('grabItem', grabItem);

    function adjustSize() {}

    let isMouseDown = false;
    

    rightItem.addEventListener('mousedown', () => {
      isMouseDown = true;
    });


    let oldMoustClientX;

    rightItem.addEventListener('mousemove', (e) => {
      const limitLeft = e.clientX;
      let rightItemReactDom = rightItem.getBoundingClientRect();
      const limitRight = rightItemReactDom.x + 5;
      
      
      if (limitLeft <= limitRight) {
        rightItem.style.cursor = 'col-resize';
      } else {
        rightItem.style.cursor = 'default';
      }


      const headerWidthRect = headerEl.getBoundingClientRect()
      const headerWidth = headerWidthRect.width;

      const leftItemWidth = leftItem.getBoundingClientRect().width



      if(isMouseDown && leftItemWidth < 700) {
        
        let windowWidth = window.innerWidth;
        let rightWidth = windowWidth - limitLeft

        rightItem.style.width = rightWidth + 'px'
        leftItem.style.width = limitLeft-headerWidth + 'px';
      }
      
     
    });

    rightItem.addEventListener('mouseup', (e) => {
      isMouseDown = false;
    });

    rightItem.addEventListener('mouseleave', (e) => {
      isMouseDown = false;
    });
  }
}
