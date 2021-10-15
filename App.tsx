import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Collapsible} from "./src/Collapsible";
import {Item} from "./src/Item";

export default function App() {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <Collapsible>
                    <Item height={200} />
                </Collapsible>
                <Collapsible>
                    <Item height={20} />
                </Collapsible>
                <Collapsible>
                    <Item height={45} />
                </Collapsible>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F2F2F2'
    }
})
