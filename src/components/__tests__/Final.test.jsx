
import { render, fireEvent, screen } from "@testing-library/react";
import Final from "../Final"
import '@testing-library/jest-dom';


// Checking ContactOne form whether input forms present or not. 

describe("ContactOne form whether input forms", ()=>{

    // Checking theory part

    it("Checking theory part", ()=>{
        render(<Final/>)

        const getInTouch = screen.getByText('get in touch')
        expect(getInTouch).toBeInTheDocument();

        const content = screen.getByText('Motivated to make a better future, connect to us through this form.')
        expect(content).toBeInTheDocument();

    })

    // Checking All Label Names 

    it("Checking All Label Names present or not", ()=>{
        render(<Final/>)

        

        const fullNameLabel = screen.getByLabelText('Full Name');
        expect(fullNameLabel).toBeInTheDocument()

        const emailLabel = screen.getByLabelText('Email Address');
        expect(emailLabel).toBeInTheDocument()

        const subjectLabel = screen.getByLabelText('Subject')
        expect(subjectLabel).toBeInTheDocument()

        const messageLabel = screen.getByLabelText('Message')
        expect(messageLabel).toBeInTheDocument()

    })

    // Checking All Input Fields present or not

    it("Checking All Input Fields present or not", ()=>{
        render(<Final/>)



        const fullName = screen.getByPlaceholderText('Your Full Name');
        expect(fullName).toBeInTheDocument()

        const email = screen.getByPlaceholderText('example@domain.com');
        expect(email).toBeInTheDocument()

        const subject = screen.getByPlaceholderText('Enter your subject')
        expect(subject).toBeInTheDocument()

        const message = screen.getByPlaceholderText('Type your message')
        expect(message).toBeInTheDocument()

    })

    // Checking All Input Fields with some data. 

    it("Checking All Input Fields with some data.",()=>{
        render(<Final/>)

        //Extracting the data
        const fullName = screen.getByPlaceholderText('Your Full Name');
        const email = screen.getByPlaceholderText('example@domain.com');
        const subject = screen.getByPlaceholderText('Enter your subject')
        const message = screen.getByPlaceholderText('Type your message')

         // Simulate user typing
        fireEvent.change(fullName, { target: { value: 'Prabhakar' } });
        fireEvent.change(email, { target: { value: 'Prabhakar@cdn.com' } });
        fireEvent.change(subject, {target: {value: 'Validating'}})
        fireEvent.change(message, { target: { value: 'using jest, we doing testing' } });

        // Check if the input values update correctly
        expect(fullName.value).toBe('Prabhakar');
        expect(email.value).toBe('Prabhakar@cdn.com');
        expect(subject.value).toBe('Validating');
        expect(message.value).toBe('using jest, we doing testing');

        // checking submit button 

        const submit = screen.getByText('Book Now')

        fireEvent.click(submit)
    })


})

