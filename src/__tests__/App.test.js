import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm Shrek`", () => {
    // Arrange
    render(<App />);

    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    // Assert
    expect(topLevelHeading).toBeInTheDocument();
});
test("displays an image of yourself with alt text identifying the content of the image", () => {
    render(<App />);

    const image = screen.getByAltText("picture of me");

    expect(image).toBeInTheDocument();

});
test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);

    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/,
        exact: true,
        level: 2,
    })
    
    expect(secondLevelHeading).toBeInTheDocument;
});
test("displays a paragraph for your biography", () => {
    render(<App />);

    const paragraph = screen.getByText(/i live in a swamp/i);

    expect(paragraph).toBeInTheDocument();
});
test("displays two links, one to your GitHub page, and one to your LinkedIn page", () => {
    render(<App />);

    const gitHubLink = screen.getByRole("link", {
        name: /GitHub/i,
        exact: false,
    });
    const linkedInLink = screen.getByRole("link", {
        name: /LinkedIn/i,
        exact: false,
    });

    expect(gitHubLink).toBeInTheDocument();
    expect(linkedInLink).toBeInTheDocument();
})