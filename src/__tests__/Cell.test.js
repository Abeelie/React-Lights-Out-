import React from "react";
import { render } from "@testing-library/react";
import Cell from "../Cell";



it("renders without crashing or errors", function() {
    render(<Cell />);
});


it("matches snapshot", function () {
    const { asFragment } = render(<Cell />);
    expect(asFragment()).toMatchSnapshot();
});