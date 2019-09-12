import { createStackNavigator, createAppContainer } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import {Easing,Animated} from 'react-native'
// @ts-ignore
import HomePage from '../homePage/homePage'


const RootStack = createStackNavigator(
  {
    'Home': {screen: HomePage},
  },
  // @ts-ignore
  {
    headerMode:"none",
    defaultNavigationOptions: {
      gesturesEnabled:false
    },
    transitionConfig: (() => ({
      screenInterpolator:CardStackStyleInterpolator.forHorizontal,
      transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
    }))
  }
)


const AppContainer = createAppContainer(RootStack);

export default AppContainer
