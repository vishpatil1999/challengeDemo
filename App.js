import React from 'react'
import { SafeAreaView } from 'react-native'
import RootProvider from './src/routes'

function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <RootProvider></RootProvider>
    </SafeAreaView>
  )
}
export default App