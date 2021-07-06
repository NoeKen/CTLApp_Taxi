import React from 'react';
import {} from 'react-native';
import styles from './styles';

const activeTaxi = props  => {
    return (
        <View style ={ styles.container}>
            <Text style={ styles.name}>Nom du Taxi</Text>
            <View style={ styles.taxImg}> IMG</View>
        </View>

    );
}

export default activeTaxi;
