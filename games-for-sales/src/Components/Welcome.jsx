import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, piacere di vederti</Alert.Heading>
      <p>Benvenuto nella mia applicazione. Qui troverai una lista di libri.</p>
    </Alert>
  );
}

export default Welcome;
