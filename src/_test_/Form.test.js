import React from "react"
import testRender from "react-test-renderer"
import Form from '../Form.js'
import { render, fireEvent } from "@testing-library/react"


describe("Form Component", () => {
  it("should be start with no loader", () => {
    const component = testRender.create(<Form isFetching={false} />);
    const testInstance = component.root;
    expect(testInstance.findByType(Form).props.isFetching).toBe(false);
  })


  it("should start loader on button click", () => {
    const component = testRender.create(<Form isFetching={true} />);
    const { getByTestId } = render(<Form />)
    const testInstance = component.root;


    fireEvent.click(getByTestId('button'))


    expect(testInstance.findByType(Form).props.isFetching).toBe(true)


  })


  it("input value shoud maintain the value", () => {
    const { getByTestId, getByLabelText } = render(<Form />)


    fireEvent.change(getByTestId('input'), { target : { value : 'Monuments'}})
    fireEvent.click(getByTestId('button'))


    expect(getByTestId('input').value).toBe('Monuments')


  })


})




