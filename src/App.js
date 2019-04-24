/** @jsx h */
import { createElement as h } from 'react'

import { Text, View } from 'react-universal-xp'

const headerBackgroundStyle = {backgroundColor: 'blue'}

const headerTextStyle = {color: 'gold', fontSize: 48}

function App() {
  return (
    <View style={headerBackgroundStyle}>
      <View>
        <Text style={headerTextStyle}>
          ☆☆ ☆☆☆ ☆☆
        </Text>
      </View>
      <View>
        <Text style={headerTextStyle}>
          ☆ Demo app ☆
        </Text>
      </View>
    </View>
  )
}

export default App
