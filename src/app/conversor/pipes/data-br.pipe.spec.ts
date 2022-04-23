import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2022-04-01 para 01/04/2022', () => {})
  const pipe = new DataBrPipe();
  expect(pipe.transform('2022-04-01')).toEqual('01/04/2022');
});
