import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="addfolder" size={26} color="#000" />
                </View>
                <Text style={styles.labelbutton}>Entradas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="tagso" size={26} color="#000" />
                </View>
                <Text style={styles.labelbutton}>Compras</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={26} color="#000" />
                </View>
                <Text style={styles.labelbutton}>Carteira</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={26} color="#000" />
                </View>
                <Text style={styles.labelbutton}>Boletos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000" />
                </View>
                <Text style={styles.labelbutton}>Conta</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelbutton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})