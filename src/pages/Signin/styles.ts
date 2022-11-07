import styled from 'styled-components'

export const SigninContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex: 1;
  flex-direction: row;
`

export const SigninRightBox = styled.div`
  width: 40%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-200']};
`

export const SigninBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  justify-content: space-between;
  gap: 1rem;

  h1 {
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SigninImageBox = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['gray-100']};
`

export const SigninLogoBox = styled.div`
  display: flex;
  height: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
  img {
    height: 100%;
  }
`

export const SigninButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #007dfe;
  background-color: ${(props) => props.theme['blue-400']};
  color: white;
  cursor: pointer;
`

export const SigninButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  p {
    color: #616161;
    margin-bottom: 5px;
  }
`
