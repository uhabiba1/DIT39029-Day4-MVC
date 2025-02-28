import { FlatList } from 'react-native';
import CategoryGrids from '../components/CategoryGrids';
import { CATEGORIES } from '../../data/sampleData';

const CategoryScreen = ({ navigation }) => {
    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', { categoryId: itemData.item.id });
        };
        return (
            <CategoryGrids 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};

export default CategoryScreen;