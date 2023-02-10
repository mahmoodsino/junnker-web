import BlogsType from "./BlogsType";
import FAQsType from "./FAQsType";

interface HomePageType {
    homeslider: [],
    faqs: FAQsType[],
    articles: BlogsType[]
    sold_count: number,
    google_reviews: string,
    trustpilot_reviews: string,
    playstore_link: string,
    appstore_link: string
}

export default HomePageType