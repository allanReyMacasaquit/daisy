import axios from 'axios';
import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const featuredUrl = '/products?featured=true';
export const loader = async () => {
	const response = await customFetch(featuredUrl);
	const featuredProducts = response.data.data;
	// console.log(featuredProducts);
	return { featuredProducts };
};
const Landing = () => {
	return (
		<>
			<Hero />
			<FeaturedProducts />
		</>
	);
};
export default Landing;
