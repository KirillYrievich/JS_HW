const news = {
    template: `
        <div class="news">
            <ul class="news__list grid grid--3">
                <li v-for="item in news_card" :key="item.id" class="news__item">
                    <a :href="item.link">
                        <article class="news-card">
                            <img class="news-card__image" :src="item.image" alt="article" width="340"
                                height="290" loading="lazy">
                            <h5 class="news-card__title">{{ item.title }}</h5>
                            <div class="news-card__body">
                                <p class="news-card__description">{{ item.description }}</p>
                                <p class="news-card__link">
                                    <span class="link-icon-wrapper">
                                        <svg width="8" height="18" viewBox="0 0 10.004 20.0082" fill="none">
                                            <path d="M1 19L9 10L1 1" stroke="currentColor"
                                                stroke-opacity="1.000000" stroke-width="2.000000"
                                                stroke-linejoin="currentColor" stroke-linecap="round" />
                                        </svg>
                                    </span>
                                </p>
                            </div>
                            <p class="news-card__category">{{ item.category }}</p>
                        </article>
                    </a>
                </li>
            </ul>
        </div>
    `,
    props: {
        news_card: {
            type: Array,
            required: true
        }
    },
}