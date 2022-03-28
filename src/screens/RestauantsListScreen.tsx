import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Constants from "expo-constants";

import RestaurantsItem from "../components/RestaurantsItem";

type RestaurantItemProps = {
    name: string;
    geo: any;
    url: string;
};

export default function RestauantsListScreen() {
    const [restaurantItem, setrestaurantItem] = useState([]);

    useEffect(() => {
        let apiURL = "https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json";
        axios.get(apiURL).then(res => {
            console.log("status: ", res.status);
            // console.log("data: ", res.data.data.restaurant.items);
            setrestaurantItem(res.data.data.restaurant.items);
        }).catch(err => {
            console.log("err status: ", err.response.status);
            console.log("err detail: ", err.response.data);
        })
    }, [])
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topVersionItemContainerView}>
                    <Text style={styles.topVersionTitleTxt}>Nando's Restaurants</Text>
                    <Text style={styles.itemGeneralTxt}>Version {Constants.manifest?.version}</Text>
                </View>

                <ScrollView>
                    {(restaurantItem && restaurantItem.length > 0) && restaurantItem.map((item: RestaurantItemProps) => {
                        return (
                            <RestaurantsItem
                                itemName={item.name}
                                itemAddress={item.geo.address.streetAddress}
                                itemNumber={item.geo.address.postalCode}
                                itemURL={item.url}
                            />
                        )
                    })}
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topVersionItemContainerView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 5,
    },
    topVersionTitleTxt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    itemGeneralTxt: {
        fontSize: 16,
        color: 'black',
        marginBottom: 2,
        marginTop:3,
    },
});
