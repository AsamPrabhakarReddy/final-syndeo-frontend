
import { render, screen } from "@testing-library/react";
import About from "../../pages/About";
import '@testing-library/jest-dom';


// Checking About Component

describe("Checking About Component", ()=>{

    
    it("Checking Navbar component", ()=>{
        render(<About/>)

        // Checking Navbar
        const navbar = screen.getByRole('navbar')
        expect(navbar).toBeInTheDocument()

        // Checking About One
        const aboutOne = screen.getByRole('aboutOne')
        expect(aboutOne).toBeInTheDocument()

        // Checking About Two 
        const aboutTwo = screen.getByRole('aboutTwo')
        expect(aboutTwo).toBeInTheDocument()

        // Checking Footer 
        
        const Footer = screen.getByRole('footer')
        expect(Footer).toBeInTheDocument()

    })

})
