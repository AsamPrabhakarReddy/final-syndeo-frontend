
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';
import Hero from '../Hero';
import '@testing-library/jest-dom';
import { expect } from 'vitest';

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

        //Checking Hero1 Component
        const Hero1 = screen.getByRole('Hero1')
        expect(Hero1).toBeInTheDocument()

        

        //Checking TrackRecord1 Component
        const TrackRecord1 = screen.getByRole('TrackRecord1')
        expect(TrackRecord1).toBeInTheDocument()

         //Checking Hero2 Component
        //  const Hero2 = screen.getByRole('Hero2')
        //  expect(Hero2).toBeInTheDocument()

          //Checking Hero3 Component
        const Hero3 = screen.getByRole('Hero3')
        expect(Hero3).toBeInTheDocument()

         //Checking Hero4 Component
         const Hero4 = screen.getByRole('Hero4')
         expect(Hero4).toBeInTheDocument()

          //Checking Hero5 Component
        const Hero5 = screen.getByRole('Hero5')
        expect(Hero5).toBeInTheDocument()
        
        //Checking ScrollData Component
        const ScrollData = screen.getByRole('ScrollData')
        expect(ScrollData).toBeInTheDocument()

        

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
