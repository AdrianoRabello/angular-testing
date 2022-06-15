import { UrlPipe } from './url.pipe';

describe('UrlPipe', () => {

  let pipe:UrlPipe;

  beforeEach(() => {
    pipe = new UrlPipe();
  })


  it('create an instance', () => {
    const pipe = new UrlPipe();
    expect(pipe).toBeTruthy();
  });

  it('it should not parse to https ',()=> {
    expect(pipe.transform('','http://localhost:8080')).toBe('http://localhost:8080')
  })
  

  it('it should parse url http to https ', () => {
    expect(pipe.transform('http://localhost:8080','',true)).toContain('https')
  })



});
