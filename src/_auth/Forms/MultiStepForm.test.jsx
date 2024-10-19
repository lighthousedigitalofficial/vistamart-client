import { render, screen } from '@testing-library/react';
import MultiStepForm from '../Forms/MultiStepForm';

describe('MultiStepForm', () => {
  test('renders MultiStepForm component', () => {
    render(<MultiStepForm />);
    const formElement = screen.getByTestId('multi-step-form');
    expect(formElement).toBeInTheDocument();
  });

  // Add more test cases here
});
