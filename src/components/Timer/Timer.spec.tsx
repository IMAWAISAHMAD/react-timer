import React from "react"
import { shallow } from "enzyme"
import Timer from "./Timer"

const timerA:Array<number|string>=['00','00','00'];

describe("Timer", () => {
  let container:any

  beforeEach(() => (container = shallow(<Timer timer={timerA} />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })

  it("should render instances of Paragraphs", () => {
    expect(container.find('p').length).toEqual(3)
  })
})