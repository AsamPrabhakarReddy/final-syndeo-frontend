
import { render, fireEvent, screen } from "@testing-library/react";
import TrackRecord from "../TrackRecord";
import "@testing-library/jest-dom"


// Checking Trackrecord Component

describe("Checking Trackrecord Component",()=>{
    
    // Checking grid-col 1
    it("Checking grid-col 1", ()=>{
        render(<TrackRecord/>)

        const TRgrid1Logo = screen.getByRole('TRgrid1Logo')
        expect(TRgrid1Logo).toBeInTheDocument()

        const TRgrid1Text = screen.getByRole('TRgrid1Text')
        expect(TRgrid1Text).toBeInTheDocument()
    })

     // Checking grid-col 2
     it("Checking grid-col 2", ()=>{
        render(<TrackRecord/>)

        const TRgrid2Logo = screen.getByRole('TRgrid2Logo')
        expect(TRgrid2Logo).toBeInTheDocument()

        const TRgrid2Text = screen.getByRole('TRgrid2Text')
        expect(TRgrid2Text).toBeInTheDocument()
    })

      // Checking grid-col 3
      it("Checking grid-col 3", ()=>{
        render(<TrackRecord/>)

        const TRgrid3Logo = screen.getByRole('TRgrid3Logo')
        expect(TRgrid3Logo).toBeInTheDocument()

        const TRgrid3Text = screen.getByRole('TRgrid3Text')
        expect(TRgrid3Text).toBeInTheDocument()
    })

    // Checking grid-col 4
    it("Checking grid-col 4", ()=>{
        render(<TrackRecord/>)

        const TRgrid4Logo = screen.getByRole('TRgrid4Logo')
        expect(TRgrid4Logo).toBeInTheDocument()

        const TRgrid4Text = screen.getByRole('TRgrid4Text')
        expect(TRgrid4Text).toBeInTheDocument()
    })
})