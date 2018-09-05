import { ThreeDDesignModule } from './three-d-design.module';

describe('ThreeDDesignModule', () => {
  let threeDDesignModule: ThreeDDesignModule;

  beforeEach(() => {
    threeDDesignModule = new ThreeDDesignModule();
  });

  it('should create an instance', () => {
    expect(threeDDesignModule).toBeTruthy();
  });
});
