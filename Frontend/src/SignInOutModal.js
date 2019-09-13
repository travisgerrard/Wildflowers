import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import moment from 'moment';

import Card from './Style/Card';
import Button from './Style/Buttons';
import Spacer from './Style/Spacer';
import Text from './Style/Text';
import ModalContainer from './Style/ModalContainer';

import { CHILDREN_QUERY } from './index';

const SignInOutModal = props => {
  const [name, setName] = useState('');
  const [createSignInOut, { data }] = useMutation(SIGN_IN, {
    refetchQueries: [
      {
        query: CHILDREN_QUERY
      }
    ]
  });
  const [updateSignInOut, { dataTwo }] = useMutation(SIGN_OUT, {
    refetchQueries: [
      {
        query: CHILDREN_QUERY
      }
    ]
  });

  const { navigation } = props;
  const childName = navigation.getParam('childName', 'NO-NAME');
  const childId = navigation.getParam('childId', 'NoId');
  const signInOut = navigation.getParam('signInOut', 'neither');
  const signInOutId = navigation.getParam('signInOutId', 'noSIOId');

  return (
    <ModalContainer>
      <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text sizeLarge weightBold>
          {childName}
        </Text>
        <Spacer extraLarge />
        <TextInput
          value={name}
          onChangeText={e => setName(e)}
          placeholder={'Your name'}
          style={styles.textBox}
        />

        <Spacer extraLarge />

        <Button
          onPress={e => {
            e.preventDefault();
            if (signInOut === 'in') {
              createSignInOut({
                variables: {
                  signInTime: moment().format('h:mm a'),
                  signInDay: moment().format('MMMM Do YYYY'),
                  whoSignedIn: name,
                  child: childId
                }
              });
            } else {
              updateSignInOut({
                variables: {
                  signOutTime: moment().format('h:mm a'),
                  whoSignedOut: name,
                  id: signInOutId
                }
              });
            }

            setName('');
            props.navigation.navigate('Main');
          }}
        >
          {signInOut === 'in' ? 'Sign In' : 'Sign Out'}
        </Button>
        <Spacer medium />
        <Button onPress={() => props.navigation.navigate('Main')}>
          Cancel
        </Button>
      </Card>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  textBox: {
    borderRadius: 7,
    color: 'black',
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '85%'
  }
});

const SIGN_IN = gql`
  mutation createSignInOut(
    $signInTime: String!
    $signInDay: String!
    $whoSignedIn: String!
    $child: ID!
  ) {
    createSignInOut(
      signInTime: $signInTime
      signInDay: $signInDay
      whoSignedIn: $whoSignedIn
      child: $child
    ) {
      id
      whoSignedIn
      signInTime
      signInDay
      child {
        id
      }
    }
  }
`;

const SIGN_OUT = gql`
  mutation updateSignInOut(
    $signOutTime: String!
    $whoSignedOut: String!
    $id: ID!
  ) {
    updateSignInOut(
      id: $id
      signOutTime: $signOutTime
      whoSignedOut: $whoSignedOut
    ) {
      id
      whoSignedOut
      signOutTime
    }
  }
`;
export default SignInOutModal;
