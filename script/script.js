// script.js

function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");

    if (!menu) {
        return;
    }

    var isOpen = menu.classList.toggle("show");

    if (menuIcon) {
        menuIcon.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
}

// 关闭菜单当点击菜单项时
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu a').forEach(item => {
        item.addEventListener('click', () => {
            var menu = document.getElementById("menu");
            var menuIcon = document.querySelector(".menu-icon");

            if (menu) {
                menu.classList.remove("show");
            }
            if (menuIcon) {
                menuIcon.setAttribute("aria-expanded", "false");
            }
        });
    });

    // 关闭菜单当点击页面其他地方时
    document.addEventListener('click', (event) => {
        var menu = document.getElementById("menu");
        var menuIcon = document.querySelector('.menu-icon');
        if (!menu || !menuIcon) {
            return;
        }

        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("show");
            menuIcon.setAttribute("aria-expanded", "false");
        }
    });
});
