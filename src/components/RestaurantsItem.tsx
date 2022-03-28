import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as WebBrowser from "expo-web-browser";

type ItemProps = {
    itemName: string;
    itemAddress: string;
    itemNumber: string;
    itemURL: string;
};

export default function RestaurantsItem(props: ItemProps) {
    return (
        <TouchableOpacity onPress={async () => {
            let result = await WebBrowser.openBrowserAsync(props.itemURL);
            console.log("result: ", result);
        }}>
            <View style={styles.container}>
                <Text style={styles.itemTitleTxt}>{props.itemName}</Text>
                <Text style={styles.itemGeneralTxt}>{props.itemAddress}</Text>
                <Text style={styles.itemGeneralTxt}>{props.itemNumber}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '95%',
        margin:10,
    },
    itemTitleTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    itemGeneralTxt: {
        fontSize: 16,
        color: 'black',
        marginBottom: 2,
    },
});
