import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainTabsNavigator from "navigations/main-tabs";
import DefaultAppTheme from "@theme";
import { RootState, store } from "@redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import AuthModal from "@screens/auth";
import { loadAppData } from "@redux/reducers/app.reducer";
import AuthService from "./services/AuthService";
import ProgramPickerModal from "@screens/program-picker";

const AppContent = () => {
  const { app, auth } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAppData());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
      />
      <MainTabsNavigator />
      <AuthModal />
      <ProgramPickerModal />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={DefaultAppTheme}>
        <AppContent />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
