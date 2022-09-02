// 테마를 포함하여 재정의한 styled-components
import 'styled-components'
import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
