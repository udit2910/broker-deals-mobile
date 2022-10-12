import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getParties} from '../redux/actions/partyActions';
import Icons from 'react-native-vector-icons/MaterialIcons';

const PartyDetails = () => {
  const user = useSelector(store => store.user);
  const parties = useSelector(store => store.party);

  const dispatch = useDispatch();

  const fetchParties = () => dispatch(getParties(user.userdata));

  const partyList = parties?.partyData?.data;

  useEffect(() => {
    fetchParties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewParty = () => {
    //function to handle click on floating Action Button
    Alert.alert('Add new party Details');
  };

  const deleteParty = data => {
    Alert.alert('Delete Party ?', `Are you sure to delete ${data.name}?`, [
      {
        text: 'No',
        style: 'cancel',
        onPress: () => {
          console.log('do not delete party');
        },
      },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          console.log('delete party');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {parties?.loading ? (
        <View style={styles.loader}>
          <Text> loading ... </Text>
        </View>
      ) : null}
      {!partyList && !parties?.loading ? (
        <View style={styles.loader}>
          <Text> No Parties Added. Tap on Plus icon to add new party.</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={partyList}
            renderItem={({item}) => (
              <Text style={styles.names}>
                {item.name}
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => deleteParty(item)}>
                  <Icons color="green" name="delete" size={25} />
                </TouchableOpacity>
              </Text>
            )}
          />
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={addNewParty}
        style={styles.touchableOpacityStyle}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
          }}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  names: {
    padding: 10,
    fontSize: 20,
    height: 55,
  },
  icons: {
    alignItems: 'flex-end',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    //backgroundColor:'black'
  },
  loader: {
    ...StyleSheet.absoluteFill,
    opacity: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
});

export default PartyDetails;
