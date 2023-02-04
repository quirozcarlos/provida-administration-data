import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 120px auto;

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border-left-color: #09f;

    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
