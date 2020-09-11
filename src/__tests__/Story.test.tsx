import { mount } from "enzyme";
import Story from "../components/Story";
import React from 'react';
const story = {
  by: "dhouston",
  id: 8863,
  time: 1175714200,
  title: "My YC app: Dropbox - Throw away your USB drive",
  url: "http://www.getdropbox.com/u/2/screencast.html",
};
const wrapper = mount(<Story story={story} />);

/** @test {Story Component} */
describe("Story Component", () => {

  it("should render without crashing", () => {
    expect(wrapper.find("h1").text()).toBe(`"${story.title}"`);
  });

  it("should click on the title and simulate click", () => {
    wrapper.find("a").simulate('click');
  });
});