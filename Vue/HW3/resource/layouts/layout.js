const layout = {
    template: `
        <header class="header">
            <div class="header__inner container">
                <a class="header__logo logo" href="/">
                    <img class="logo__image" src="./images/icons/logo.svg" alt="Interno" width="34" height="34"
                        loading="lazy" />
                    <h4 class="logo__title">Interno</h4>
                </a>
                <nav class="header__menu hidden-mobile">
                    <ul class="header__menu-list">
                        <li v-for="menu in menubar.menuItems" :key="menu.label" class="header__menu-item">
                            <a class="header__menu-link" :href="menu.href">{{ menu.label }}</a>
                        </li>
                    </ul>
                </nav>
                <button class="header__burger-menu burger-button visible-mobile" type="button"
                    onclick="mobileOverlay.showModal()">
                    <span class="visually-hidden">Open navigation menu</span>
                </button>
            </div>
        </header>

        <slot></slot>

        <footer class="footer">
            <div class="footer__inner container grid grid--3">
                <div class="header__logo logo">
                    <img class="logo__image" src="./images/icons/logo.svg" alt="Interno" width="34" height="34"
                        loading="lazy" />
                    <h4 class="logo__title">Interno</h4>
                </div>
                <nav class="footer__menu">
                    <h5 class="footer__menu-title">Страницы</h5>
                    <ul class="footer__menu-list">
                        <li v-for="menu in menubar.menuItems" :key="menu.label" class="footer__menu-item">
                            <a class="footer__menu-link" :href="menu.href">{{ menu.label }}</a>
                        </li>
                    </ul>
                </nav>
                <div class="footer__contacts">
                    <h5 class="footer__menu-title">Контакты</h5>
                    <ul class="footer__menu-list">
                        <li class="footer__contacts-item">55 East Birchwood Ave. Brooklyn, New York 11201</li>
                        <li class="footer__contacts-item">contact@interno.com</li>
                        <li class="footer__contacts-item">(123) 456 - 7890</li>
                    </ul>
                </div>
            </div>
        </footer>

        <dialog class="mobile-overlay visible-mobile" id="mobileOverlay">
            <form class="mobile-overlay__close-button-wrapper" method="dialog">
                <button class="mobile-overlay__close-button cross-button" type="submit">
                    <span class="visually-hidden">Закрыть меню</span>
                </button>
            </form>
            <div class="mobile-overlay__body">
                <ul class="mobile-overlay__list">
                    <li v-for="menu in menubar.menuItems" :key="menu.label" class="mobile-overlay__item">
                        <a class="mobile-overlay__link" :href="menu.href">{{ menu.label }}</a>
                    </li>
                </ul>
            </div>
        </dialog>
    `,
    data() {
        return {
            menubar: {
                menuItems: [
                    { label: 'Домой', href: './' },
                    { label: 'Проект', href: './project.html' },
                    { label: 'Блог', href: './blog.html' }
                ]
            },
        }
    },
}