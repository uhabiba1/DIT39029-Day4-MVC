import { FlatList } from 'react-native';
import CategoryGrids from '../components/CategoryGrids';

import { CATEGORIES } from '../data/sampleData';

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGrids title={itemData.item.title} color={itemData.item.color} />
  );
}

const CategoryScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;