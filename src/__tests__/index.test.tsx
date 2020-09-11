import { render, screen } from "@testing-library/react";
import App, { getStaticProps } from "../../pages/index";
import { mount } from "enzyme";
const stories = [100, 200, 300]
const wrapper = mount(<App stories={stories} />);

describe("Testing Home page", () => {

  it("renders without crashing", () => {
    render(<App stories={stories} />);
    expect(
      screen.getByRole("heading", { name: "Hacker News" })
    ).toBeInTheDocument();
  });

  it("It should render the component to match the snapshopt", () => {
    expect(wrapper).toMatchSnapshot()
  });

  it("Scroll behaviour of the list", () => {
    const mEvent = {
      target: { clientHeight: 650, scrollHeight: 1200, scrollTop: 400 },
    };
    wrapper.find('#storiesList').simulate('scroll', mEvent);
  });

  // Could not make this one to work - css modules are mocked
  // it("should click on the theme button and simulate click", () => {
  //   wrapper.find("#themeButton").simulate('click');
  //   expect(wrapper.find("#container").props().className).toContain("darkMode")
  // });

  // Attemp to try API testing - failed 
  // it('should load user data', () => {
  //   return getStaticProps()
  //     .then(stories => {
  //       expect(stories).toBeDefined()
  //     })
  // })
});
