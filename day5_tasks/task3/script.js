const tabContent = {
    tab1: "Content for Tab 1",
    tab2: "Content for Tab 2",
    tab3: "Content for Tab 3"
};

function handleTabClick(event) {
    const tabId = event.target.getAttribute("data-tab");
    const tabContentElement = document.querySelector(`#${tabId}`);

    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');

    tabContentElement.style.display = 'block';

    if (tabContentElement.innerHTML === 'Loading...') {
        tabContentElement.innerHTML = tabContent[tabId];
    }
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick);
});
