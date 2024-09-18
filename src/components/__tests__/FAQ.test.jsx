
import { render, screen, fireEvent } from "@testing-library/react";
import FAQ from "../FAQ";
import Accordion from "../Accordion";
import '@testing-library/jest-dom';


describe("FAQ component testing", ()=>{
    // Checking title in FAQ Component
    it("Checking title in FAQ Component", ()=>{

        render(<FAQ/>)
        const faq = screen.getByText('Frequently Asked Questions')
        expect(faq).toBeInTheDocument();


    })

    // Checking title 1
    it("Checking title 1", ()=>{
        render(<FAQ/>)
        const title1 = screen.getByText('How can I manage all the bookings made in the booking software?')
        expect(title1).toBeInTheDocument();
    })
    // Checking title 2
    it("Checking title 2", ()=>{
        render(<FAQ/>)
        const title2 = screen.getByText('Can I sync my personal calendar with an online booking platform?')
        expect(title2).toBeInTheDocument();
    })
    // Checking title 3
    it("Checking title 3", ()=>{
        render(<FAQ/>)
        const title3 = screen.getByText('Can different staff members have their own login?')
        expect(title3).toBeInTheDocument();
    })
    // Checking title 4
    it("Checking title 4", ()=>{
        render(<FAQ/>)
        const title4 = screen.getByText('How can our customers contact us for immediate guidance?')
        expect(title4).toBeInTheDocument();
    })
        // it('displays answer when title is clicked', () => {
        //   // Render the Accordion component
        //   render(
        //     <Accordion
        //       title="How can I manage all the bookings made in the booking software?"
        //       answer="You can have complete control over all the bookings that are made in the system."
        //     />
        //   );
      
        //   // Query the title element (the button)
        //   const titleElement = screen.getByText(
        //     'How can I manage all the bookings made in the booking software?'
        //   );
      
        //   // Ensure the answer is not visible initially
        //   expect(screen.queryByText(
        //     'You can have complete control over all the bookings that are made in the system.'
        //   )).not.toBeVisible();
      
        //   // Simulate a user clicking the title
        //   fireEvent.click(titleElement);
      
        //   // Ensure the answer is now visible
        //   expect(screen.getByText(
        //     'You can have complete control over all the bookings that are made in the system.'
        //   )).toBeVisible();
        // });
})