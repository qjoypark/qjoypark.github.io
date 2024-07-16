// script.js

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// 关闭菜单当点击菜单项时
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu a').forEach(item => {
        item.addEventListener('click', () => {
            var menu = document.getElementById("menu");
            menu.classList.remove("show");
        });
    });

    // 关闭菜单当点击页面其他地方时
    document.addEventListener('click', (event) => {
        var menu = document.getElementById("menu");
        var menuIcon = document.querySelector('.menu-icon');
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("show");
        }
    });
});