import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import Card from './Style/Card';
import Button from './Style/Buttons';
import Spacer from './Style/Spacer';
import Text from './Style/Text';
import ModalContainer from './Style/ModalContainer';

import { CHILDREN_QUERY } from './index';

const AddChild = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [createChild, { data }] = useMutation(CREATE_CHILD, {
    refetchQueries: [
      {
        query: CHILDREN_QUERY
      }
    ]
  });

  return (
    <ModalContainer>
      <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text sizeLarge weightBold>
          Add Child
        </Text>
        <Spacer extraLarge />
        <TextInput
          value={firstName}
          onChangeText={e => setFirstName(e)}
          placeholder={'first name'}
          style={styles.textBox}
        />
        <Spacer medium />
        <TextInput
          value={lastName}
          onChangeText={e => setLastName(e)}
          placeholder={'last name'}
          style={styles.textBox}
        />
        <Spacer extraLarge />

        <Button
          onPress={e => {
            e.preventDefault();
            createChild({ variables: { firstName, lastName } });
            setFirstName('');
            setLastName('');
            props.navigation.navigate('Main');
          }}
        >
          Submit
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

export default AddChild;

const CREATE_CHILD = gql`
  mutation CREATE_CHILD($firstName: String!, $lastName: String!) {
    createChild(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;
