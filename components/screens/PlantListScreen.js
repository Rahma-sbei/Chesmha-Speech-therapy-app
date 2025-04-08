import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const plantData = [
    { id: 'sunflower', name: 'Sunflower', image: require('../assets/Sunflower.png') },
    { id: 'lavender', name: 'Lavender', image: require('../assets/lavender.png') },
    { id: 'rose', name: 'Rose', image: require('../assets/rose.png') },
    { id: 'dahlia', name: 'Dahlia', image: require('../assets/Dahlia.png') },
    { id: 'iris', name: 'Iris', image: require('../assets/iris.png') },
    { id: 'aloe', name: 'Aloe vera', image: require('../assets/Aloe vera.png') },
    { id: 'alstroemeria', name: 'Alstroemeria', image: require('../assets/alstroemeria.png') },
    { id: 'tulip', name: 'Tulip', image: require('../assets/tulip.png') },
    { id: 'azalea', name: 'Azalea', image: require('../assets/Azalea.png') },
    { id: 'orchid', name: 'Orchid', image: require('../assets/orchid.jpg') },
    { id: 'daisy', name: 'Daisy', image: require('../assets/Daisy.png') },
    { id: 'peonies', name: 'Peonies', image: require('../assets/peonies.png') },
];

const PlantListScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [filteredPlants, setFilteredPlants] = useState(plantData);

    const handlePlantPress = useCallback((plantId) => {
        navigation.navigate('PlantDetail', { plantId });
    }, [navigation]);

    const handleSearch = useCallback((text) => {
        setSearchText(text);
        const filtered = plantData.filter(plant =>
            plant.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredPlants(filtered);
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {}
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Plants</Text>
                    <View style={{ width: 24 }} />
                </View>

                {}
                <View style={styles.searchBarContainer}>
                    <Icon name="search" size={18} color="#888" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search"
                        placeholderTextColor="#888"
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                </View>

                {}
                <View style={styles.plantsHeaderImageContainer}>
                    <Image
                        source={require('../assets/Plants.png')}
                        style={styles.plantsHeaderImage}
                    />
                </View>

                {}
                <ScrollView contentContainerStyle={styles.plantListContainer}>
                    {filteredPlants.map((plant) => (
                        <TouchableOpacity key={plant.id} style={styles.plantItem} onPress={() => handlePlantPress(plant.id)}>
                            <Image source={plant.image} style={styles.plantImageItem} />
                            <Text style={styles.plantName}>{plant.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F8FF',
    },
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    searchIcon:{
      marginRight :10
   },
   searchBar:{
      flex :1,
      height :40,
      fontSize :16,
      color:'#333'
   },
   plantsHeaderImageContainer:{
      alignItems:'center',
      marginBottom :20
   }, 
   plantsHeaderImage:{
      width:'100%',
      height :100, 
      resizeMode:'contain'
   }, 
   plantListContainer:{
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-around',
      paddingHorizontal :10,
      paddingBottom :20
   }, 
   plantItem:{
      width:'30%',
      marginBottom :20,
      alignItems:'center'
   }, 
   plantImageItem:{
       width:'100%',
       height :120, 
       borderRadius :15,
       resizeMode :'cover'
   }, 
   plantName:{
       marginTop :5,
       textAlign:'center',
       fontSize :14,
       color:'#333'
   }
});

export default PlantListScreen;
