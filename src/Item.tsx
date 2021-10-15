import React from "react";
import {View} from "react-native";

interface Props {
    height: number
}

export const Item =  (props: Props) => {
    return (
        <View style={{ height: props.height, backgroundColor: 'red' }} />
    )
}
