const MIN_STOP_RESIZE = 300;
const MAX_STOP_RESIZE = 550;

export default function changeWidthSize() {
  const leftItem = document.querySelector('.grab-to-change-size-left');
  const rightItem = document.querySelector('.grab-to-change-size-right');
  const headerEl = document.querySelector('.header');
  const mailParentEl = document.querySelector('.mail-parent');
  const changeSizeBarEl = document.querySelector('.change-size-bar');

  const mailSummaryTimeEls = document.querySelectorAll('.mail-summary-time');

  if (leftItem && rightItem && headerEl && mailParentEl && changeSizeBarEl) {
    let windowInnerWidth = window.innerWidth;
    let headerInnerWidth = headerEl.getBoundingClientRect().width;
    let rightItemWidth = rightItem.getBoundingClientRect().width;

    changeSizeBarEl.style.right = rightItemWidth + 'px';
    changeSizeBarEl.style.display = 'block';

    let isMouseDown = false;
    changeSizeBarEl.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      disableTextSelect();
    });

    rightItem.addEventListener('resize', () => {});

    mailParentEl.addEventListener('mouseup', (e) => {
      if (isMouseDown) isMouseDown = false;
      mailParentEl.style.cursor = 'default';
      enableTextSelect();
    });

    mailParentEl.addEventListener('mousedown', (e) => {
      if (isMouseDown) {
        mailParentEl.style.cursor = 'col-resize';
      }
    });

    mailParentEl.addEventListener('mousemove', (e) => {
      if (isMouseDown) {
        if (
          e.pageX - headerInnerWidth <= MIN_STOP_RESIZE ||
          e.pageX - headerInnerWidth >= MAX_STOP_RESIZE
        ) {
          return;
        } else {
          if (leftItem.getBoundingClientRect().width > 350) {
            mailSummaryTimeEls.forEach(
              (mailSummaryTimeEl) => (mailSummaryTimeEl.style.display = 'inline-block')
            );
          } else if (leftItem.getBoundingClientRect().width < 350) {
            mailSummaryTimeEls.forEach(
              (mailSummaryTimeEl) => (mailSummaryTimeEl.style.display = 'none')
            );
          }
          changeSize(e.pageX);
        }
      }
    });

    function changeSize(mousePageX) {
      disableTextSelect();
      rightItem.style.width = windowInnerWidth - mousePageX + 'px';
      changeSizeBarEl.style.right = windowInnerWidth - mousePageX + 'px';
      leftItem.style.width = mousePageX - headerInnerWidth + 'px';
    }

    changeSizeBarEl.addEventListener('mouseup', (e) => {
      isMouseDown = false;
      enableTextSelect();
    });

    function disableTextSelect() {
      rightItem.classList.add('is-changing-size');
      leftItem.classList.add('is-changing-size');
    }

    function enableTextSelect() {
      rightItem.classList.remove('is-changing-size');
      leftItem.classList.remove('is-changing-size');
    }
  }
}
