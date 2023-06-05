import React, { useState } from 'react'
import { Modal, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({ modalVisible, setModalVisible, setPacientes, pacientes }) => {

    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [fecha, setFecha] = useState(new Date())

    const handleCita = () => {
        if([paciente,  propietario,  email,  telefono,  sintomas,  fecha].includes('')){
            Alert.alert("Uppss... ", "Todos los campos son obligatorios")
            return
        }

        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            sintomas,
            fecha
        }

        setPacientes([...pacientes,nuevoPaciente])
        setModalVisible(false)

        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setSintomas('')
        setFecha(new Date())
    }

    return (
        <Modal animationType='slide' visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}> Nueva {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable
                        style={styles.btnCancelar}
                        onPress={() => setModalVisible(false)}>
                        <Text style={styles.btnCancelarTexto}> X Cerrar </Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Paciente'
                            placeholderTextColor={"#666"}
                            value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre propietario'
                            placeholderTextColor={"#666"}
                            onChangeText={setPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={"#666"}
                            keyboardType='email-address'
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Tel.'
                            placeholderTextColor={"#666"}
                            keyboardType='number-pad'
                            onChangeText={setTelefono}
                            maxLength={10}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha alta</Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker
                                date={fecha}
                                locale='es'
                                fadeToColor="none"
                                textColor='#000'
                                onDateChange={(date) => setFecha(date)}
                            />
                        </View>

                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput
                            style={[styles.input, styles.sintomasInput]}
                            placeholder='Sintomas'
                            placeholderTextColor={"#666"}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>

                    <Pressable
                        style={styles.btnNuevaCita}
                        onPress={() => handleCita()}>
                        <Text
                            style={styles.btnNuevaCitaText}> Agregar Paciente </Text>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: "#FFF"
    },
    tituloBold: {
        fontWeight: 'bold'
    },
    contenido: {
        backgroundColor: "#6D28D9",
        flex: 1
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
        marginBottom: 10
    },
    label: {
        color: "#FFF",
        marginBottom: 10,
        marginTop: 15,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        color: "#000"
    },
    sintomasInput: {
        height: 100,
        verticalAlign: 'top'
    },
    fechaContenedor: {
        backgroundColor: "#FFF",
        borderRadius: 10,
    },
    btnCancelar: {
        marginTop: 15,
        backgroundColor: "#5827A4",
        marginHorizontal: 30,
        padding: 15,
        marginBottom: 30,
        marginVertical: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#FFF"
    },
    btnCancelarTexto: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        textTransform: "uppercase"
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: "#F59E0B",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
        marginBottom: 100
    },
    btnNuevaCitaText: {
        textAlign: "center",
        color: "#5827A4",
        textTransform: "uppercase",
        fontSize: 16,
        fontWeight: "900"
    }
})
export default Formulario