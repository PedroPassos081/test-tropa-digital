import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon.svg";
import CampoDigitacao from "../../components/CampoDigitacao";
import { useState } from "react";
import Botao from "../../components/Button";
import boneco from "../../assets/Boneco-login.png";
import Paragraph from "../../components/Paragraph";

const BackgroundColor = styled.div`
  background: #f9fbff;
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 758px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 20px;
  }
`;

const LoginForm = styled.form`
  flex-direction: column;
  padding: 30px;
  width: 340px;
  height: 480px;
  margin-top: 20px;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    margin-top: 0;
    padding: 10px 0;
  }
`;

const TextLogin = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #cc6237;
  padding: 22px 0 0 0;
  margin: 0;
`;

const SecondContainer = styled.div`
  display: flex;
  background-color: #cc6237;
  width: 360px;
  height: 460px;
  border-radius: 20px;
  margin: 20px;

  @media (max-width: 480px) {
    display: none; /* Esconde o container da imagem no celular */
  }
`;

const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BonecoImagem = styled.img`
  position: absolute;
  left: -40px; /* Move a imagem para fora do container */
  bottom: 0;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "teste@teste.com" && senha === "1234") {
      navigate("/home"); // redireciona para a rota /home
    } else {
      setErro("E-mail ou senha inválidos.");
    }
  };

  return (
    <BackgroundColor>
      <Container>
        <FormContainer>
          <LoginForm onSubmit={handleLogin}>
            <img src={logo} alt="Logo" />
            <TextLogin>Bem-vindo de volta</TextLogin>
            <Paragraph style={{ marginBottom: "25px" }}>
              Entre com sua conta para acessar o painel.
            </Paragraph>
            <CampoDigitacao
              valor={email}
              tipo="text"
              placeholder="seunome@seuservidor.com"
              onChange={setEmail}
              label="E-mail"
            />
            <CampoDigitacao
              valor={senha}
              tipo="password"
              placeholder="Digite aqui"
              onChange={setSenha}
              label="Senha"
            />
            <Botao>Enviar</Botao>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
          </LoginForm>
          <SecondContainer>
            <ContainerImage>
              <BonecoImagem src={boneco} alt="Boneco" />
            </ContainerImage>
          </SecondContainer>
        </FormContainer>
      </Container>
    </BackgroundColor>
  );
}

export default Login;
