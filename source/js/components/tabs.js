// tabs

const tabsParrents = [...document?.querySelectorAll('.tabs')];
const tabsParrentsInner = [...document?.querySelectorAll('.tabs__inner')];

let tabBtn = 'tabs-btn', // default btn
    tabContent = 'tabs-content', // default content
    innerTabBtn = 'inner-btn',
    innerTabContent = 'inner-content';

function tabsInit(tabsParrentItem, btns, contents) {
  tabsParrentItem.map(function(tabsParr) {
    if (tabsParr) {
      document.addEventListener('DOMContentLoaded', () => {
        const tabsBtn = tabsParr.querySelectorAll(`[${btns}]`);
        const tabsContent = tabsParr.querySelectorAll(`[${contents}]`);

        for (const button of tabsBtn) {
          button.addEventListener('click', function () {
            const tabsPath = this.getAttribute(`${btns}`);

            tabsPath == 'confectioner-products' ?
            document.querySelector('.details__aside')?.classList.add('active') :
            document.querySelector('.details__aside')?.classList.remove('active');


            tabsBtn.forEach(el => {el.classList.remove('active')});
            tabsParr.querySelector(`[${btns}="${tabsPath}"]`).classList.add('active');
            tabsHandler(tabsPath);
          });
        }

        const tabsHandler = (path) => {
          tabsContent.forEach(el => {el.classList.remove('active')});
          tabsParr.querySelector(`[${contents}="${path}"]`).classList.add('active');
        };
      });
    }}
  );
}

tabsInit(tabsParrents, tabBtn, tabContent);
tabsInit(tabsParrentsInner, innerTabBtn, innerTabContent);
