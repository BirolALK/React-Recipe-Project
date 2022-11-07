import  {LoginContainer, FormContainer, StyledImg, Header, StyledForm, StyledInput, StyledButton}  from "./Login.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";



const Login = () => {
  
  const navigate = useNavigate();

  const userInfo={
    username : "Ahmet"

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stingify(userInfo))
    navigate("-1")
    
  }

  return (
    <LoginContainer>
      <FormContainer> 
        <StyledImg src={meal}/>
        <Header>
          {"<CW/>"} Recipe
        </Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholer= " Enter username" type="text"/>
          <StyledInput placeholer= " Enter Passworld" type="password"/>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>

      </FormContainer>
    </LoginContainer>
  )
}

export default Login