import { render, fireEvent, screen } from "@testing-library/react";
import Carousel from "../Carousel";
import "@testing-library/jest-dom"

// Checking Carousel Components 

describe("Checking Carousel Components ", ()=>{

    //Checking title 
    it("Checking title ", ()=>{
        render(<Carousel/>)
        const title = screen.getByText('Why Use Syndèo?')
        expect(title).toBeInTheDocument()
    })

    //Checking text
    it("Checking title ", ()=>{
        render(<Carousel/>)
        const text = screen.getByText('Syndèo allows you to highlight your free periods and share the details with another person within an organization, who can then choose a suitable time to meet you. You’ll both receive reminders and links to meetings, making operations such as recruitment and customer support easy.')
        expect(text).toBeInTheDocument()
    })

    // Checking grid 1
    it("Checking grid 1", ()=>{
        render(<Carousel/>)
        const CarouselGrid1 = screen.getByRole('CarouselGrid1')
        expect(CarouselGrid1).toBeInTheDocument()
    })

     // Checking grid 2
     it("Checking grid 2", ()=>{
        render(<Carousel/>)
        const CarouselGrid2 = screen.getByRole('CarouselGrid2')
        expect(CarouselGrid2).toBeInTheDocument()
    })

     // Checking grid 3
     it("Checking grid 3", ()=>{
        render(<Carousel/>)
        const CarouselGrid3 = screen.getByRole('CarouselGrid3')
        expect(CarouselGrid3).toBeInTheDocument()
    })

     // Checking grid 4
     it("Checking grid 4", ()=>{
        render(<Carousel/>)
        const CarouselGrid4 = screen.getByRole('CarouselGrid4')
        expect(CarouselGrid4).toBeInTheDocument()
    })

     // Checking grid 5
     it("Checking grid 5", ()=>{
        render(<Carousel/>)
        const CarouselGrid5 = screen.getByRole('CarouselGrid5')
        expect(CarouselGrid5).toBeInTheDocument()
    })

     // Checking grid 6
     it("Checking grid 6", ()=>{
        render(<Carousel/>)
        const CarouselGrid6= screen.getByRole('CarouselGrid6')
        expect(CarouselGrid6).toBeInTheDocument()
    })
})