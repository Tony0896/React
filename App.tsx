import React from 'react';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Modal,
    useColorScheme,
    View,
} from 'react-native';
import { useState } from 'react';
import Formulario from './src/components/Formulario';

function App(): JSX.Element {

    const [modalVisible, setModalVisible] = useState(false)
    const [pacientes, setPacientes] = useState([])

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: '#FFF',
        flex: 1,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={'light-content'} backgroundColor={"#08568C"} />
            <View style={styles.header}>
                <Text style={styles.textHeader}>Bienvenido</Text>
            </View>
            <Text style={styles.titleModulo}>Administrador de citas {''}
                <Text style={styles.subtitleModulo}>Veterinaria</Text>
            </Text>
            <View style={styles.containerButton}>
                <Pressable style={styles.buttons} onPress={() => setModalVisible(true)}>
                    <Text style={styles.textBtn}>Nueva Cita</Text>
                </Pressable>
                <Formulario
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    setPacientes={setPacientes}
                    pacientes = {pacientes}
                />
            </View>

            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textBtn : {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    page: {
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#08568C',
        paddingTop: 10,
        paddingBottom: 15
    },
    textHeader:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    },
    buttons:{
        backgroundColor: "#08568C",
        textAlign:'center',
        padding:15,
        borderRadius: 15,
        marginTop: 20,
        marginHorizontal: 20
    },
    containerButton:{
        alignContent:'center',
        justifyContent: 'center',
    },
    titleModulo:{
        color: "#000",
        fontSize : 25,
        textAlign: "center",
        marginTop: 15
    },
    subtitleModulo:{
        color: "#08568C",
        fontSize : 25,
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default App;
