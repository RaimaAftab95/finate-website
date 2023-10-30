// function to show side bar
function showSidebar()
{
    // here we only want to make visible sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display='flex';
}
// hide side bar on cross click
function hideSidebar()
{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display='none';  
}