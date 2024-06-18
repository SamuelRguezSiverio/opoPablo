import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgTrabajoSocial,
	imgDeportes,
	imgFilosofia,
	imgGeografia,
	imgHistoria,
	imgLiteratura,
	imgTecnologia,
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			{/* Category Link Ciencia */}
			<CategoryCard
				category={categories.trabajosocial}
				src={imgTrabajoSocial}
				alt={`Categoría ${categories.trabajosocial}`}
				gradientColor=' from-purple-500 to-pink-500'
			/>
			
		</div>
	);
};
