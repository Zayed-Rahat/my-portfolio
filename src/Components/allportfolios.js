import port1 from '../img/portImages/azurStore.png';
import port2 from '../img/portImages/teleScope.png';
import port3 from '../img/portImages/imgSearch.png';

const portfolios = [
    {
        id: 1,
        category: 'MERN',
        link1: 'https://github.com/Zayed-Rahat/azur-store-front.git',
        link2: 'https://rahat-ecommerce-project.web.app',
        icon1: 'Github',
        icon2: 'Live',
        image: port1,
        title: 'AZUR Store ',
        details: 'React JS, Node JS, ES6, Redux, mongoDB, Ant Design ,Cloudinary, Stripe'

    },
    {
        id: 2,
        category: 'FRONT END',
        link1: 'https://github.com/Zayed-Rahat/telescope-2021',
        link2: 'https://zayed-rahat.github.io/telescope-2021',
        icon1: 'Github',
        icon2: 'Live',
        image: port2,
        title: 'Telescope',
        details: 'HTML , CSS ,JavaScript'

    },
    {
        id: 3,
        category: 'React',
        link1: 'https://github.com/Zayed-Rahat/tp-img-search',
        link2: 'https://tp-image-store-a24992.netlify.app',
        icon1: 'Github',
        icon2: 'Live',
        image: port3,
        title: 'Image Search',
        details: 'React JS, TailWind CSS'

    },
]

export default portfolios;