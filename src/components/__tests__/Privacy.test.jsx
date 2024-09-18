
import { render, fireEvent, screen  } from "@testing-library/react";
import Privacy from "../../pages/Privacy";
import '@testing-library/jest-dom';

// Checking inside Privacy Component
 
describe("Checking Both Navbar and Privacy Component present or not", ()=>{
    
    it("Checking with Components", ()=>{
        render(<Privacy/>)

        // Checking Navbar Component
        const navbar = screen.getByTestId('nav')
        expect(navbar).toBeInTheDocument()

        // Checking Privacy Component
        const privacy = screen.getByRole('privacy')
        expect(privacy).toBeInTheDocument()
    })
})

// Checking Specific Privacy Component

describe("Checking Privacy Component data present or not", ()=>{
    
    it("Checking with Components", ()=>{
        render(<Privacy/>)

        // Checking title content
        const title = screen.getByText('Terms & Conditions')
        expect(title).toBeInTheDocument()

        // Checking subtitle content
        const subTitle = screen.getByText('Effective from february 2024')
        expect(subTitle).toBeInTheDocument()
        
        // Chceking text content 
        const text = screen.getByText('These terms and conditions govern your use of the education portal provided by Syndeo. By accessing or using the Portal, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, you may not access the Portal.')
        expect(text).toBeInTheDocument()

        // Checking the privacy 1 
        const privacy1 = screen.getByText('1. User Accounts')
        expect(privacy1).toBeInTheDocument()

        // Checking the privacy 2 
        const privacy2 = screen.getByText('2. Content')
        expect(privacy2).toBeInTheDocument()

        // Checking the privacy 3
        const privacy3 = screen.getByText('3. User Conduct')
        expect(privacy3).toBeInTheDocument()

        // Checking the privacy 4
        const privacy4 = screen.getByText('4. Intellectual Property')
        expect(privacy4).toBeInTheDocument()

        // Checking the privacy 5
        const privacy5 = screen.getByText('5. Privacy')
        expect(privacy5).toBeInTheDocument()

        // Checking the privacy 6
        const privacy6 = screen.getByText('6. Limitation of Liability')
        expect(privacy6).toBeInTheDocument()

        // Checking the privacy 7
        const privacy7 = screen.getByText('7. Indemnification')
        expect(privacy7).toBeInTheDocument()

        // Checking the privacy 8 
        const privacy8 = screen.getByText('8. Modifications')
        expect(privacy8).toBeInTheDocument()

        // Checking the privacy 9
        const privacy9 = screen.getByText('9. Governing Law')
        expect(privacy9).toBeInTheDocument()

        // Checking the privacy 10
        const privacy10 = screen.getByText('10. Contact Information')
        expect(privacy10).toBeInTheDocument()

      
    })
})

