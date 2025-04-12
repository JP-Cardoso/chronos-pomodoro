import Container from "../../components/Container";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainForm";
import MainTemplete from "../../template/MainTemplete";

export default function HomePage() {

  return (
    <MainTemplete>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>

    </MainTemplete>
  )
}