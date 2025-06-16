import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import MainLayout from "./Layout/MainLayout";
import NavBar from "./components/NavBar";

/**
 * --------The Alert--------
 * Instead of doing conditional if statements, you can use && in JS.
 * true && 1 === 1
 * false && 1 === false
 *
 * Thus only rendering the alert if the first is true.
 * This is used in the <Alert> element. Calling the onClose function (created in the component interface)
 * and then using the 'setAlertVisibility' to set the state to false. The onClose is set to be called onClick in the component.
 *
 *
 * -------The Button--------
 * With the interface created in the 'Button' component, you pass the arguments in the Button element.
 * here, we set the color to 'primary' and the onClick gets a function (here logging times clicked.).
 * Finally, the "children" string is set between the two <Button> and thus is the text for the button.
 *
 */

function App() {
  /**
   * useState is done to set the state of an element. It creates an array of two elements.
   * The initial state and a changing state. The initial state is set in the '()'.
   */
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <MainLayout>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>An Alert </Alert>
      )}
      <br></br>
      <NavBar></NavBar>
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        A button
      </Button>
    </MainLayout>
  );
}

export default App;
