import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact";
import '@testing-library/jest-dom';

// Checking Contact Component whether it is rendering three components or not 

describe("Contact Component", () => {
  it("should render Navbar, Contact Form, and Footer", () => {
    render(<Contact />);

    // Check for Navbar
    const navbar = screen.getByRole('navbar')
    expect(navbar).toBeInTheDocument();

    // Check for Contact Form
    const contactForm = screen.getByRole('contact');
    expect(contactForm).toBeInTheDocument();

    // Check for Footer
    const footer = screen.getByRole('footer');
    expect(footer).toBeInTheDocument();
  });
  
});
