import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SectionList } from 'react-native';

const ReportScreen = () => {
    return (
        <View style={report.container}>
            <Text>여기가 지연되고 있어요!</Text>
            {/* <SectionList>
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            </SectionList> */}
        </View>
    )
}

const report = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'rgb(243, 243, 243)',
    alignItems: 'center',
    justifyContent: 'center',
    },

});

export default ReportScreen;