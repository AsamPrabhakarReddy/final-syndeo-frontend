
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';
import Hero from '../Hero';
import '@testing-library/jest-dom';

// jest.mock('lottie-web');

  
// Checking Home component whether inside components present or not. Navbar, Hero, TrackRecord, Carousel, FAQ, Final, Footer
describe("Checking whether all components present or not", ()=>{
   
    it("Components present or not", ()=>{
        render(<Home/>)

        // const hero = screen.findByText('Find & Book your dream')
        // expect(hero).toBeInTheDocument()

        // screen.debug()
        // Checking NavBar
        const navbar = screen.getByTestId('nav');
        expect(navbar).toBeInTheDocument()
        // Checking Hero
        // const hero = screen.getByRole('hero');
        // expect(hero).toBeInTheDocument()
        // Chekcing TrackRecord
        // const trackRecord = screen.getByRole('trackRecord')
        // expect(trackRecord).toBeInTheDocument()
        // Checking Carousel 
        const carousel = screen.getByRole("carousel")
        expect(carousel).toBeInTheDocument()
        // Checking FAQ
        const faq = screen.getByRole("faq")
        expect(faq).toBeInTheDocument()
        // Checking Final 
        const final = screen.getByRole("final")
        expect(final).toBeInTheDocument()
        //Checking Footer
        const footer = screen.getByRole("footer")
        expect(footer).toBeInTheDocument()
    })
})
