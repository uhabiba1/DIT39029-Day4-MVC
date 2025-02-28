import { CATEGORIES, MEALS } from '../data/sampleData';

//to manage meal data processing
export const getMealsByCategory = (categoryId) => {
    return MEALS.filter(meal => meal.categoryIds.includes(categoryId));
};
