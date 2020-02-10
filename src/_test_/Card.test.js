import React from "react"
import Card from '../Card.js'
import { render } from "@testing-library/react"


describe("Card Component", () => {
  it("Card should contain a img", () => {
    
    const { getByTestId } = render(<Card posts=""/>)


    expect(getByTestId("card"))

  })


  it("Card info should start as undefined", () => {
    const { getByTestId } = render(<Card posts={[]}/>)


    expect(getByTestId("card").info).toBe(undefined)
  })


  it("Card should contain artistName, trackName, dateString, primaryGenreName and infoTrackPrice", () => {
    const { getByTestId } = render(<Card posts={["item1", "item2"]}/>)


    expect(getByTestId("card").posts)
  })

})
