import { normalize } from 'polished'
import styled from 'styled-components'
import Page from '../layouts'

const Index = () => (
  <Page>
    <Container>
      <h1>Dr. Begüm Utz, Ph.D.</h1>
    </Container>
  </Page>
)

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`

export default Index
