import { render, fireEvent, screen } from "@testing-library/react";
import Hero from "../Hero";
import "@testing-library/jest-dom"
import { expect, it } from "vitest";

// Checking Hero Component
describe("Hero Component Checking", ()=>{

    // Checking Entire content on left side 
    it("Checking Title", ()=>{
        render(<Hero/>)

        //Checking text hero1 role
        const text1 = screen.getByRole('hero1')
        expect(text1).toBeInTheDocument()

         //Checking text hero2 role
        const text2 = screen.getByRole('hero2')
        expect(text2).toBeInTheDocument()

         //Checking text hero3 role
        const text3 = screen.getByRole('hero3')
        expect(text3).toBeInTheDocument()

        // // Checking Button 

        // const getStartedNowBtn = screen.getByText('Get Started Now')
        // fireEvent(getStartedNowBtn).toBeInTheDocument()

        const button = screen.getAllByText('Get Started Now');
        button.forEach(link => {
            expect(link.closest('a')).toHaveAttribute('href', '/login');
        });

    })

    // Checking right-side content i.e,, Lottie 

    it("Checking Lottie Animation ", ()=>{
        render(<Hero/>)
        
        const lottie = screen.getByRole('heroLottie')
        expect(lottie).toBeInTheDocument()
    })
})