const modern = {
    template: `
        <div class="modern">
            <ul class="modern__list grid grid--2">
                <li v-for="item in modern_card" :key="item.id" class="modern__item">
                    <article class="modern-card">
                        <img class="modern-card__image" :src="item.image" alt="kitchen" width="525"
                            height="548" loading="lazy">
                        <div class="modern-card__body">
                            <div class="modern-card__wrapper">
                                <h5 class="modern-card__title">{{ item.title }}</h5>
                                <ul class="modern-card__breadcrumbs breadcrumbs">
                                    <li>
                                        <a class="breadcrumbs__link" :href="item.category.link">
                                            {{ item.category.label }}
                                        </a>
                                    </li>
                                    <li>
                                        <a class="breadcrumbs__link" :href="item.category.subcategory.link">
                                            {{ item.category.subcategory.label }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a class="modern-card__link" :href="item.link">
                                <span class="link-icon-wrapper">
                                    <svg width="8" height="18" viewBox="0 0 10.004 20.0082" fill="none">
                                        <path d="M1 19L9 10L1 1" stroke="currentColor"
                                            stroke-opacity="1.000000" stroke-width="2.000000"
                                            stroke-linejoin="currentColor" stroke-linecap="round" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </article>
                </li>
            </ul>
        </div>
    `,
    props: {
        modern_card: {
            type: Array,
            required: true
        }
    },
}