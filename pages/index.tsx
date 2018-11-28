import { faDna } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import Page from '../layouts'

const Index = () => (
  <Page>
    <Container>
      <Icon>
        <FontAwesomeIcon icon={faDna} />
      </Icon>
      <Title>Dr. Begüm Utz, Ph.D.</Title>
    </Container>
  </Page>
)

const Title = styled.h1`
  font-size: 3em;
`

const Icon = styled.div`
  font-size: 3em;
`

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  min-width: 100vw;
  min-height: 100vh;
`

export default Index
