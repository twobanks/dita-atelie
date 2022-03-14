import SocialMedia from "../SocialMedia";
import * as S from "./styled";

const Main = () => (
  <S.Content>
    <S.Dita />
    <S.Note>
      <S.Title>Oi, lindeusas!</S.Title>
      <S.Description>
        Em breve teremos um novo local para expor os modelos de
        <strong> Chinelos Havaianas Customizadas</strong>, e também os novos
        <strong> Acessórios</strong> idealizados por
        <strong> Dita Atêliê</strong>. <br />
        Muitas coisas boas estão vindo por aê. <br /> Aguardem!!
      </S.Description>
      <SocialMedia />
    </S.Note>
  </S.Content>
);

export default Main;
