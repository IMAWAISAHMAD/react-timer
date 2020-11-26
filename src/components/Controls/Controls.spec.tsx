import React from "react"
import { shallow } from "enzyme"
import Controls from "./Controls"

describe("TimerButton", () => {
  let container:any

  beforeEach(() => {
    container = shallow(
      <Controls
        setSeconds={jest.fn()}
      />
    )
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })

  it("should render instances of the button", () => {
    expect(container.find("button").length).toEqual(3)
  })
})