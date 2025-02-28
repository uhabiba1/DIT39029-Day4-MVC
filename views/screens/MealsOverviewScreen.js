import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getMealsByCategory } from '../../controllers/mealController';

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId;
    const displayedMeals = getMealsByCategory(catId);

    const renderMealItem = ({ item }) => (
      <View style={styles.mealBox}>
          <Text style={styles.mealTitle}>{item.title}</Text>
          <Text style={styles.mealDetails}>Duration: {item.duration} min</Text>
          <Text style={styles.mealDetails}>Complexity: {item.complexity}</Text>
          <Text style={styles.mealDetails}>Affordability: {item.affordability}</Text>
      </View>
  );

    return (
      <View style={styles.container}>
        <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
      </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  mealBox: {
      backgroundColor: 'white',
      padding: 16,
      marginVertical: 10,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
  },
  mealTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
  },
  mealDetails: {
      fontSize: 14,
      color: '#666',
  },
});
