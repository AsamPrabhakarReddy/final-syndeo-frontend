import { render, fireEvent,screen } from "@testing-library/react";
import Footer from "../Footer";
import '@testing-library/jest-dom';


// Checking Footer Component

describe("Checking Footer Component elements", ()=>{

    it("Footer elements checking",()=>{
        render(<Footer/>)

        // Checking Services content
        const services = screen.getByText('Services')
        expect(services).toBeInTheDocument()

        // Checking Connect content
        const connect = screen.getByText('Connect')
        expect(connect).toBeInTheDocument()

        // Checking Company content
        const company = screen.getByText('Company')
        expect(company).toBeInTheDocument()

         // Checking Contact Us content
         const contact = screen.getAllByText('Contact Us')
         expect(contact.length).toBeGreaterThan(0)

         // Checking Input Field
         const email = screen.getByPlaceholderText('Enter your email');
         expect(email).toBeInTheDocument()

         // Checking Subscribe Button
         const submit = screen.getByText('Subscribe')
         fireEvent.click(submit)

         // Checking @copyright data
         const copyright = screen.getByText('Copyright © 2024 Syndèo. All rights reserved.')
         expect(copyright).toBeInTheDocument()

         // Checking Under Services content
         const CustomerSuccess = screen.getByText('Customer Success')
         expect(CustomerSuccess).toBeInTheDocument()
 
         const PopularBlogs = screen.getByText('Popular Blogs')
         expect(PopularBlogs).toBeInTheDocument()

         const LoginIntoSyndeo = screen.getByText('Log In to Syndèo')
         expect(LoginIntoSyndeo).toBeInTheDocument()

         const AppointmentBooking = screen.getByText('Appointment Booking')
         expect(AppointmentBooking).toBeInTheDocument()

         const DeveloperPolicy = screen.getByText('Developer Policy')
         expect(DeveloperPolicy).toBeInTheDocument()

         // Checking Under Connect content 

         const HelpCenter = screen.getByText('Help Center')
         expect(HelpCenter).toBeInTheDocument()
 
         const syndeoCareers = screen.getByText('Syndèo Careers')
         expect(syndeoCareers).toBeInTheDocument()

         const BecomePartner = screen.getByText('Become Partner')
         expect(BecomePartner).toBeInTheDocument()

         const SignUpHere = screen.getByText('Sign Up Here')
         expect(SignUpHere).toBeInTheDocument()

         const TeamCompany = screen.getByText('Team & Company')
         expect(TeamCompany).toBeInTheDocument()

 
         // Checking under Company content

         const Terms = screen.getByText('Terms & Conditions')
         expect(Terms).toBeInTheDocument()
 
         const Privacy = screen.getByText('Privacy Policy')
         expect(Privacy).toBeInTheDocument()

         const About = screen.getByText('About Syndèo')
         expect(About).toBeInTheDocument()

         const whySyndeo = screen.getByText('Why Syndèo?')
         expect(whySyndeo).toBeInTheDocument()
    })
})

