import { handleSubmit } from './formHandler';

test('Verify that handleSubmit is actually defined', () => {
    expect(handleSubmit).toEqual(expect.anything());
});