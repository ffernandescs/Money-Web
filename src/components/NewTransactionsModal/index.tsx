import { FormEvent, useState } from 'react';
import ExitImg from '../../assets/exit.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api';

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionsModal({ isOpen, onRequestClose}: NewTransactionsModalProps) {

  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    };

    api.post('/transactions', data)
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"  
    >
      <button 
        type='button' 
        onClick={onRequestClose} 
        className="react-modal-close">
          <img src={ExitImg} alt="Fechar Modal" />
      </button>
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input 
            type="text" 
            placeholder='Titulo'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <input 
            type="number" 
            placeholder='Valor'
            value={value}
            onChange={event => setValue(Number(event.target.value))}

          />
          <TransactionTypeContainer>
            <RadioBox 
              type='button'
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              type='button'
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              activeColor="red"

            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input 
            type="text" 
            placeholder='Categoria'
            value={category}
            onChange={event => setCategory(event.target.value)}

          />
          <button
            type='submit'
          >
            Cadastrar
          </button>
        </Container>
    </Modal>
  )
}