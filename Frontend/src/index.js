import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import _ from 'lodash';

import Text from './Style/Text';
import Button from './Style/Buttons';
import Card from './Style/Card';
import Spacer from './Style/Spacer';
import * as C from './Style/constants';

import Clock from './Clock';

const App = props => {
  const { loading, error, data } = useQuery(CHILDREN_QUERY);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;

  const signInStatus = (hasSignedIn, child) => {
    console.log(hasSignedIn);
    console.log(child);

    if (!hasSignedIn.length) {
      return (
        <Button
          onPress={() =>
            props.navigation.navigate('SignInOutModal', {
              childName: `${child.firstName} ${child.lastName}`,
              childId: child.id,
              signInOut: 'in'
            })
          }
        >
          Sign In
        </Button>
      );
    }

    if (hasSignedIn.length && !hasSignedIn[0].signOutTime) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            {`${hasSignedIn[0].whoSignedIn} signed in at ${hasSignedIn[0].signInTime}`}
          </Text>
          <Spacer extraLarge />
          <Button
            onPress={() =>
              props.navigation.navigate('SignInOutModal', {
                childName: `${child.firstName} ${child.lastName}`,
                childId: child.id,
                signInOut: 'out',
                signInOutId: hasSignedIn[0].id
              })
            }
          >
            Sign Out
          </Button>
        </View>
      );
    }

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          {`${hasSignedIn[0].whoSignedIn} signed in at ${hasSignedIn[0].signInTime}`}
        </Text>
        <Spacer extraLarge />
        <Text>
          {`${hasSignedIn[0].whoSignedOut} signed out at ${hasSignedIn[0].signOutTime}`}
        </Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/Background.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Card style={{ backgroundColor: 'white' }}>
              <Image
                source={require('../assets/WildFlowersLogo.png')}
                style={styles.imageStyle}
              />
              <Clock style={{ flex: 1 }} />
            </Card>
          </View>

          {data.children.map(child => {
            const { signInOuts } = child;

            const signInTodayArray = _.filter(signInOuts, {
              signInDay: moment().format('MMMM Do YYYY')
            });

            return (
              <View key={child.id}>
                <Card>
                  <View style={styles.cardTitle}>
                    <Text weightBold sizeExtraLarge>
                      {child.firstName} {child.lastName}
                    </Text>
                  </View>
                  <View style={styles.cardButtonSpace}>
                    {signInStatus(signInTodayArray, child)}
                  </View>
                </Card>
              </View>
            );
          })}
          <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => props.navigation.navigate('AddChild')}>
              Add Child
            </Button>
          </Card>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'space-around'
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: 'auto',
    resizeMode: 'contain'
  },

  cardTitle: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: C.colorBackgroundThemeGreen,
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardButtonSpace: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: C.colorBackgroundThemeGreenSofter,
    borderRadius: 5
  }
});

export const CHILDREN_QUERY = gql`
  query Children {
    children {
      id
      firstName
      lastName
      signInOuts {
        id
        signInTime
        signOutTime
        whoSignedIn
        whoSignedOut
        signInDay
      }
    }
  }
`;
