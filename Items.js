import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    useWindowDimensions, 
    TouchableOpacity 
} from 'react-native';
import { useState } from 'react';


export default function Items ({item}) {

    const { width } = useWindowDimensions();
    const [ toggle, setToggle ] = useState(true);
    return (
        <View style={ [styles.container, { width }]}>
            <Text style = {styles.title}>{item.title}</Text>
            <View style = {styles.imageContainer}>
                { 
                    toggle ? (
                        <Image 
                        source = {item.image}
                        style = {[styles.image, { width, resizeMode: 'contain' }]}
                        />
                    ) : null
                }
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {() => setToggle(!toggle)}
                    >
                        <Text style = {styles.buttonText}>Toggle image</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.descriptionContainer}>
                <Text style = {styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 0.8,
        justifyContent: 'center',
        borderRadius: 20,   
    },
    imageContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: 600,

    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: 'black',
        textAlign: 'center',
        marginTop: 40,
    },
    descriptionContainer: {
        flex: 0.525,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 48,
    },
    button: {
        width: 150,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#505AC9',
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    }
});