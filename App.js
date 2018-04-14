import React from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    FlatList,
    SectionList
} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
      return (
          <View style={styles.container}>
            <FlatList
              data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            <SectionList
              sections={[
                {title: 'D', data: ['Devin']},
                {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
