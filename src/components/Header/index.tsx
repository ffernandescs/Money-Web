import logoImg from '../../assets/Logo.svg'
import { Container, Content, ContentLogo } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal}: HeaderProps) {



  return (
    <Container>~
      <Content>
        <ContentLogo>
          <img src={logoImg} alt="money web" />
          <h1>Money Web</h1>
        </ContentLogo>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

        

      </Content>
      
    </Container>
  )
}