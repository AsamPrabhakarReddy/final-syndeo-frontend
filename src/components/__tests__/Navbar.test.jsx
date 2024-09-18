

import { render, fireEvent, screen  } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

import '@testing-library/jest-dom';

// Checking Navigation 

describe("Testing Navbar with JEST", ()=>{

    //Checking title is present or not 

    it("Testing with navigation links", ()=>{
        render(
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
        )

        const TitleText = screen.getAllByText('SYNDÈO.')
        expect(TitleText.length).toBeGreaterThan(0)
    })

    // Cheking navigation links are present or not 
    it("Testing with navigation links", ()=>{
        render(
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
        )

    

        const HomeText = screen.getAllByText('Home');
        expect(HomeText.length).toBeGreaterThan(0);

        const AboutUsText = screen.getAllByText('About Us');
        expect(AboutUsText.length).toBeGreaterThan(0);

        const ContactText = screen.getAllByText('Contact');
        expect(ContactText.length).toBeGreaterThan(0);
        
        const loginAndRegister = screen.getAllByText('Login / Register');
        expect(loginAndRegister.length).toBeGreaterThan(0);
        
    })

    // Checking if the links have the correct href attributes

    it("Testing href attributes", ()=>{
        render(
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
        )

        const homeLinks = screen.getAllByText('Home');
        homeLinks.forEach(link => {
            expect(link.closest('a')).toHaveAttribute('href', '/');
        });

        const aboutLinks = screen.getAllByText('About Us');
        aboutLinks.forEach(link => {
            expect(link.closest('a')).toHaveAttribute('href', '/about');
        });

        const contactLinks = screen.getAllByText('Contact');
        contactLinks.forEach(link => {
            expect(link.closest('a')).toHaveAttribute('href', '/contact');
        });
        
        const loginAndRegisterLinks = screen.getAllByText('Login / Register');
        loginAndRegisterLinks.forEach((link)=>{
            expect(link.closest('a')).toHaveAttribute('href','/login')
        })
    })
})