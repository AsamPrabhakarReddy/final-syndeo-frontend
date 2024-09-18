

import {render, fireEvent, screen} from "@testing-library/react"
import AboutOne from "../AboutOne"
import '@testing-library/jest-dom';
import { describe, expect } from "vitest";
import About from "../../pages/About";

// Checking AboutOne Component

describe("Checking AboutOne Component", ()=>{

    // Checking title text
    it("Checking title text", ()=>{
        render(<AboutOne/>)

        const title = screen.getByText('About Syndèo')
        expect(title).toBeInTheDocument()
    })

    // Checking Description 
    it("Checking Description ", ()=>{
        render(<AboutOne/>)

        const text = screen.getByText('Syndèo allows you to highlight your free periods and share the details with another person within an organization, who can then choose a suitable time to meet you. You’ll both receive reminders and links to meetings, making operations such as recruitment and customer support easy.')
        expect(text).toBeInTheDocument()
    })

    // Checking Grid columns
    it("Checking Grid columns", ()=>{
        render(<AboutOne/>)

        // Checking Grid1 
        const lottie1 = screen.getByRole('lottie1')
        expect(lottie1).toBeInTheDocument()

        const lottie1Header = screen.getByText('Better Workflow Management')
        expect(lottie1Header).toBeInTheDocument()

        const lottie1Text = screen.getByText('Better Workflow Management')
        expect(lottie1Text).toBeInTheDocument('Explore the range of features that make Syndéo the best online booking and management system for businesses of any size and industry. We offer custom features to help you attract new clients, nurture your current ones and manage your business like a pro!')

         // Checking Grid2 
         const lottie2 = screen.getByRole('lottie2')
         expect(lottie2).toBeInTheDocument()
 
         const lottie2Header = screen.getByText('Embedded Scheduling and Routing')
         expect(lottie2Header).toBeInTheDocument()
 
         const lottie2Text = screen.getByText('Better Workflow Management')
         expect(lottie2Text).toBeInTheDocument('Explore the range of features that make Syndéo the best online booking and management system for businesses of any size and industry. We offer custom features to help you attract new clients, nurture your current ones and manage your business like a pro!')
 
          // Checking Grid3
          const lottie3 = screen.getByRole('lottie3')
          expect(lottie3).toBeInTheDocument()
  
          const lottie3Header = screen.getByText('Superior Security & Compliance')
          expect(lottie3Header).toBeInTheDocument()
  
          const lottie3Text = screen.getByText('Better Workflow Management')
          expect(lottie3Text).toBeInTheDocument('Explore the range of features that make Syndéo the best online booking and management system for businesses of any size and industry. We offer custom features to help you attract new clients, nurture your current ones and manage your business like a pro!')
  
    })
})