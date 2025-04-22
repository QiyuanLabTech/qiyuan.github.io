document.addEventListener("DOMContentLoaded", function () {
    // 获取当前URL的锚点
    const hash = window.location.hash;

    // 根据锚点添加高亮
    if (hash) {
        // 移除所有高亮
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // 添加高亮到对应的导航项
        const activeNav = document.querySelector(`#nav${hash}`);
        if (activeNav) {
            activeNav.classList.add('active');
        }
    }
});