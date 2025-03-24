import React, { useCallback } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const foodDetails = {
    brik: {
        name: 'Brik',
        arabicName: 'بريك',
        image: require('../assets/Brik.jpg'),
        description:
            "Brik is a famous Tunisian dish made with malsouka, a thin pastry similar to phyllo dough. It is deep-fried and typically filled with a raw egg, tuna, capers, and parsley. The dish is known for its crispy texture and rich, savory filling.\n\n" +
            "Origins & Cultural Significance\n" +
            "Brik has roots in Ottoman and North African cuisine. It is a staple of Tunisian street food and home cooking, especially during Ramadan and special occasions. The dish is often served as an appetizer or light meal.\n\n" +
            "Variations\n" +
            "While the classic Brik à l'Œuf is the most popular, other versions exist:\n" +
            "Brik au Thon (tuna-filled)\n" +
            "Brik aux Crevettes (with shrimp)\n" +
            "Brik à la Viande (filled with minced meat and onions)\n\n" +
            "Interesting Fact\n" +
            "A traditional belief in Tunisia says that if a young man eats a brik without breaking the runny egg yolk, he is ready for marriage!\n\n" +
            "Brik is best enjoyed hot and crispy, often with a squeeze of lemon. 🍋",
    },
    couscous: {
        name: 'Couscous',
        arabicName: 'كسكس',
        image: require('../assets/couscous.jpg'),
        description:
            "Couscous is a traditional North African dish consisting of small steamed granules of semolina, served with a stew. It’s often made with vegetables and meat or fish.",
    },
    lablabi: {
        name: 'Lablabi',
        arabicName: 'لبلابي',
        image: require('../assets/lablebi.jpg'),
        description:
            "Lablabi is a popular Tunisian chickpea soup, typically served with stale bread, a soft-cooked egg, olive oil, harissa, and lemon juice.",
    },
    mouchouia: {
        name: 'Mouchouia salad',
        arabicName: 'سلطة مشوية',
        image: require('../assets/Machouia salad.jpg'),
        description:
            "Mouchouia salad is a traditional Tunisian grilled vegetable salad, usually made with tomatoes, peppers, onions, and garlic.",
    },
    ojja: {
        name: 'Ojja',
        arabicName: 'عجة',
        image: require('../assets/Ojja.jpg'),
        description:
            "Ojja is a spicy Tunisian egg and tomato stew, often enriched with merguez sausage or other meats. It's a hearty and flavorful dish.",
    },
    kafteji: {
        name: 'Kafteji',
        arabicName: 'كفتاجي',
        image: require('../assets/kafteji.jpg'),
        description:
            "Kafteji is a Tunisian dish of fried vegetables, usually including peppers, tomatoes, potatoes, and eggplant, all cut into small pieces.",
    },
    mloukhia: {
        name: 'Mloukhia',
        arabicName: 'ملوخية',
        image: require('../assets/Mloukhia.jpg'),
        description:
            "Mloukhia is a flavorful stew made from jute leaves, typically cooked with beef or lamb, garlic, and spices. It's a rich and hearty Tunisian dish.",
    },
    chorba: {
        name: 'Chorba',
        arabicName: 'شوربة',
        image: require('../assets/chorba.jpg'),
        description:
            "Chorba is a diverse family of soups found across North Africa and the Middle East, often made with vegetables, meat, and pasta or grains.",
    },
    mechoui: {
        name: 'Mechoui',
        arabicName: 'مشوي',
        image: require('../assets/Mechoui.jpg'),
        description:
            "Mechoui is a whole roasted lamb or sheep, traditionally cooked in a pit oven. It is a festive dish popular in North African celebrations.",
    },
    mosli: {
        name: 'Mosli',
        arabicName: 'مصلي',
        image: require('../assets/Mosli.jpg'),
        description:
            "Mosli is a Tunisian baked fish dish, typically prepared with tomatoes, peppers, onions, and a blend of herbs and spices.",
    },
    makarouna: {
        name: 'Makarouna',
        arabicName: 'مقرونة',
        image: require('../assets/Makarouna.jpg'),
        description:
            "Makarouna is a Tunisian pasta dish, often prepared with a spicy tomato sauce and various meats or vegetables. It's a staple in Tunisian cuisine.",
    },
    tajine: {
        name: 'Tajine',
        arabicName: 'طاجين',
        image: require('../assets/Tajine.jpg'),
        description:
            "Tajine is a slow-cooked stew, named after the earthenware pot in which it's cooked. It typically contains meat, vegetables, and aromatic spices.",
    },
};

const FoodDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { foodId } = route.params;
    const food = foodDetails[foodId];

    const handleBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const handleSave = useCallback(() => {
        Alert.alert('Save', 'Food saved!');
    }, []);

    if (!food) {
        return (
            <View style={styles.container}>
                <Text>Food not found</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                {}
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <Icon name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>

                {}
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Icon name="bookmark" size={24} color="#000" />
                </TouchableOpacity>

                {}
                <Image source={food.image} style={styles.foodImage} />

                {}
                <View style={styles.nameCard}>
                    <Text style={styles.foodName}>{food.name}</Text>
                    <Text style={styles.foodArabicName}>{food.arabicName}</Text>
                </View>

                {}
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.description}>{food.description}</Text>
                </View>

                {}
                <TouchableOpacity style={styles.nextButton} onPress={() => { }}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 20, 
        left: 20,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 5,
    },
    saveButton: {
        position: 'absolute',
        top: 20, 
        right: 20,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 5,
    },
    foodImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginTop: 40,  
    },
    nameCard: {
        backgroundColor: 'rgba(248, 248, 255, 0.7)',
        padding: 10,
        borderRadius: 10,
        margin: 20,
    },
    foodName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    foodArabicName: {
        fontSize: 24,
        textAlign: 'right',
        color: 'black',
    },
    descriptionContainer: {
        padding: 20,
    },
    descriptionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
    nextButton: {
        backgroundColor: '#9370DB',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        margin: 20,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default FoodDetailScreen;
