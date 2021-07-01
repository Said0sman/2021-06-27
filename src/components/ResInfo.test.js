import ResInfo from "./ResInfo";
import { render, fireEvent, screen} from "@testing-library/react";



test("render the Resa Input", () => {
  const conponent = render(<ResInfo />);
  const headerElement = conponent.getByTestId("Resa");

  expect(headerElement.textContent).toBe("RESETRÄCKA");
});

test("render the Bränsle Input", () => {
  const conponent = render(<ResInfo />);
  const headerElement = conponent.getByTestId("Bränsle");

  expect(headerElement.textContent).toBe("BRÄNSLEFÖRBRUKNING");
});

test("render the Bensin Input", () => {
  const conponent = render(<ResInfo />);
  const headerElement = conponent.getByTestId("Bensin");

  expect(headerElement.textContent).toBe("BENSIN- 98");
});

test("render the Button", () => {
  const conponent = render(<ResInfo />);
  const headerElement = conponent.getByTestId("Rensa");

  expect(headerElement.textContent).toBe("RENSA");
});

test("render the value input is working", () => {
    const conponent = render(<ResInfo />);
    const inputElement = conponent.getByTestId("Input");


expect(inputElement.value).toBe("0");

fireEvent.change(inputElement, {
    target:{  
        value: "3"
}

})
expect(inputElement.value).toBe("3")
});





