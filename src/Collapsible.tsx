import React from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import Animated, {
    measure,
    runOnUI,
    useAnimatedRef,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming
} from "react-native-reanimated";

interface Props {
    children: JSX.Element
}

export const Collapsible = (props: Props) => {
    const aRef = useAnimatedRef()
    const open = useSharedValue(false)
    const height = useSharedValue(0)
    const progress = useDerivedValue(() => open.value ? withTiming(1) : withTiming(0))

    const style = useAnimatedStyle(() => ({
        height: height.value * progress.value + (progress.value ? 0 : 1),
        opacity: progress.value === 0 ? 0 : 1,
    }));

    return (
        <View style={styles.collapsible}>
            <TouchableWithoutFeedback
                onPress={() => {
                    if (height.value === 0) {
                        runOnUI(() => {
                            "worklet";
                            height.value = measure(aRef).height;
                        })();
                    }
                    open.value = !open.value;
                }}
            >
                <View style={styles.header}>
                    <Text>
                        Collapse !!
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.children, style]}>
                <View ref={aRef}>
                    {props.children}
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    children: {
        overflow: 'hidden'
    },
    collapsible: {
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 32,
    },
    header: {
        padding: 16,
    }
})
