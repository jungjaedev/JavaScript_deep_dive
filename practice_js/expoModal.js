import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View, ImageBackground, Touchable } from 'react-native';
import styled from 'styled-components/native';
// import WriteBeans from './WriteBeans';
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from 'native-base';

export default function Main() {
  const [writing, setWriting] = useState(false);

  // const groudClicked = () => {
  //   // console.log('hi');
  //   setWriting(true);
  // };
  // useEffect(() => {
  //   if (writing) {
  //     return (

  //     );
  //   }
  // }, [writing]);

  return (
    <MainView style={{ flex: 1 }}>
      <ImageBackgrounds source={require('../../img/pinkback.gif')} resizemode="cover">
        <TouchableOpacity onPress={() => setWriting(true)}>
          <Grourds source={require('../../img/gourds.png')} resizemode="contain" style={{ resizeMode: 'contain' }} />
          {/* 박을 누르면 콩주머니 작성 모달띄워줌*/}
          {writing ? (
            <NativeBaseProvider>
              <Modal isOpen={writing}>
                <Modal.Content maxWidth="400px">
                  <Modal.CloseButton />
                  <Modal.Header>Contact Us</Modal.Header>
                </Modal.Content>
              </Modal>
            </NativeBaseProvider>
          ) : null}
        </TouchableOpacity>
        <Girl source={require('../../img/girl.png')} resizemode="contain" style={{ resizeMode: 'contain' }} />
      </ImageBackgrounds>
    </MainView>
  );
}

const ImageBackgrounds = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
  opacity: 0.8;
`;

const MainView = styled.View`
  /* background-color: red; */
`;

const Grourds = styled.Image`
  margin-left: 40px;
  height: 400px;
  width: 100%;
`;

const Girl = styled.Image`
  margin-top: 20px;
  height: 30%;
  width: 30%;
`;
