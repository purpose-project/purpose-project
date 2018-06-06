import { BeginModule } from './begin.module';

describe('BeginModule', () => {
  let beginModule: BeginModule;

  beforeEach(() => {
    beginModule = new BeginModule();
  });

  it('should create an instance', () => {
    expect(beginModule).toBeTruthy();
  });
});
