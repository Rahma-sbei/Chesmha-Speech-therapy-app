import React, { useCallback } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const animalDetails = {
    lion: {
        name: 'Lion',
        arabicName: 'أسد',
        image: require('../assets/lion.jpg'),
        description:
            "Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey. Their coats are yellow-gold, and adult males have shaggy manes that range in color from blond to reddish-brown to black. The length and color of a lion's mane is likely determined by age, genetics and hormones. Young lions have light spotting on their coats that disappears as they grow.\n\n" +
            "Without their coats, lion and tiger bodies are so similar that only experts can tell them apart. Lions inhabit a wide range of habitats, from open plains to thick brush and dry thorn forest. Except for a small population of the Indian lion subspecies that remains in the Gir Forest of northwest India, lions now live only in Africa, from the Sahara's southern fringe to northern South Africa. They are absent from equatorial areas dominated by moist tropical forest.",
    },
  
    dog: {
        name: 'Dog',
        arabicName: 'كلب',
        image: require('../assets/Dog.jpg'),
        description:
            "The domestic dog (Canis lupus familiaris or Canis familiaris) is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative.",
    },
    cat: {
        name: 'Cat',
        arabicName: 'قط',
        image: require('../assets/cat.jpg'),
        description:
            "The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.",
    },
     horse: {
        name: 'Horse',
        arabicName: 'حصان',
        image: require('../assets/horse.jpg'),
        description:
            "The horse (Equus caballus) is a domesticated, odd-toed ungulate mammal. It belongs to the taxonomic family Equidae and is one of the most widespread domestic animals.",
    },
     bear: {
        name: 'Bear',
        arabicName: 'دب',
        image: require('../assets/bear.jpg'),
        description:
            "Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are recognized, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere.",
    },
     giraffe: {
        name: 'Giraffe',
        arabicName: 'زرافة',
        image: require('../assets/giraffe.jpg'),
        description:
            "The giraffe (Giraffa camelopardalis) is a tall African mammal, the tallest living terrestrial animal and the largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies.",
    },
     turtle: {
        name: 'Turtle',
        arabicName: 'سلحفاة',
        image: require('../assets/turtle.jpg'),
        description:
            "Turtles are reptiles of the order Chelonia or Testudines. They are characterized by a special bony or cartilaginous shell developed from their ribs and acting as a shield.",
    },
     gorilla: {
        name: 'Gorilla',
        arabicName: 'غوريلا',
        image: require('../assets/gorilla.jpg'),
        description:
            "Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa. The genus Gorilla is divided into two species: the eastern gorillas and the western gorillas (both critically endangered), and either four or five subspecies.",
    },
     frog: {
        name: 'Frog',
        arabicName: 'ضفدع',
        image: require('../assets/frog.jpg'),
        description:
            "Frogs are amphibians in the order Anura (meaning 'tail-less'), formerly referred to as Salientia (meaning 'leaping'). Frogs are among the most diverse groups of vertebrates, with over 8,800 known species.",
    },
     squirrel: {
        name: 'Squirrel',
        arabicName: 'سنجاب',
        image: require('../assets/squirrel.jpg'),
        description:
            "Squirrels are members of the family Sciuridae, a family that includes small or medium-size rodents. The squirrel family includes tree squirrels, ground squirrels, chipmunks, marmots (including woodchucks), flying squirrels, and prairie dogs.",
    },
     camel: {
        name: 'Camel',
        arabicName: 'جمل',
        image: require('../assets/camel.jpg'),
        description:
            "Camels are even-toed ungulates in the genus Camelus, bearing distinctive humps on their backs. The two surviving species of camel are the dromedary camel, which has one hump, and the Bactrian camel, which has two humps.",
    },
     sheep: {
        name: 'Sheep',
        arabicName: 'غنم',
        image: require('../assets/sheep.jpg'),
        description:
            "Sheep (Ovis aries) are quadrupedal, ruminant mammals typically kept as livestock. Like all ruminants, sheep are members of the order Artiodactyla, the even-toed ungulates.",
    },
};

const AnimalDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { animalId } = route.params;
    const animal = animalDetails[animalId];

    const handleBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const handleSave = useCallback(() => {
        Alert.alert('Save', 'Animal saved!');
    }, []);

    if (!animal) {
        return (
            <View style={styles.container}>
                <Text>Animal not found</Text>
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
                <Image source={animal.image} style={styles.animalImage} />

                {}
                <View style={styles.nameCard}>
                    <Text style={styles.animalName}>{animal.name}</Text>
                    <Text style={styles.animalArabicName}>{animal.arabicName}</Text>
                </View>

                {}
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.description}>{animal.description}</Text>
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
    animalImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginTop: 30,
    },
    nameCard: {
        backgroundColor: 'rgba(248, 248, 255, 0.7)',
        padding: 10,
        borderRadius: 10,
        margin: 20,
    },
    animalName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    animalArabicName: {
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

export default AnimalDetailScreen;
