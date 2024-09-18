
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import AboutTwo from "../AboutTwo";

// Checking About Two Component
describe("Checking AboutTwo Component", ()=>{

    // Checking Title content 
    it("Checking Title", ()=>{
        render(<AboutTwo/>)

        const title = screen.getByRole('title')
        expect(title).toBeInTheDocument()
    })
    //  Checking Text
    it("Checking Text", ()=>{
        render(<AboutTwo/>)

        const text = screen.getByText('Once you create your Syndèo booking page, all you have to do is share the booking link, so invitees can view your availability and schedule time with you. Whenever a new meeting is booked, Syndèo automatically populates the event details and takes care of sending event reminders.')
        expect(text).toBeInTheDocument()
    })

    // Checking Button

    it("Checking Button", ()=>{
        render(<AboutTwo/>)

        const contactUs = screen.getByText('Contact Us')

        fireEvent.click(contactUs)
    })
    

})