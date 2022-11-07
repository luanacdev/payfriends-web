import { fireEvent, render } from '@testing-library/react';
import { Signin } from '.';
import db from '../../../db.json';

describe('Signin', () => {
  it('should render correctly', () => {    
    const {getByPlaceholderText, getByText} = render(<Signin />)

    const welcomeText = getByText('Bem vindo de volta')  
    const emailInput = getByPlaceholderText('example@example.com');
    const passInput = getByPlaceholderText('*****');
    const button = getByText('Entrar');

    expect(welcomeText).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
  
  it('should login', async() => {    
    const mockLogin = jest.fn((data)=> {
      const user = db.account.find(user => user.email === data.email && user.password === data.password); 
      
      return !!user;
    });
  
    const {getByPlaceholderText, getByRole} = render(<Signin onTestSignin={mockLogin} />)

    const email = "usuario@gmail.com";
    const password = "1234";
    
    const emailInput = getByPlaceholderText('example@example.com');
    const passInput = getByPlaceholderText('*****');
    
    fireEvent.change(emailInput, {target: {value: email}});
    fireEvent.change(passInput, {target: {value: password}});
    
    const loginButton = getByRole('button', { name: /^Entrar$/i });
    
    fireEvent.click(loginButton);
    
    expect(mockLogin).toHaveBeenCalled();
    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveReturnedWith(true);
  })
})
   