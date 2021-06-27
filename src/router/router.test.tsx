import { render } from '@testing-library/react';
import Router from '.';

describe('app router', () => {
    it('should render the router', () => {
        const fetch = jest.spyOn(window, 'fetch')
        render(<Router />);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
})