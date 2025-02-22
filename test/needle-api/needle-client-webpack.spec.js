const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const ClientGenerator = require('../../generators/client');
const constants = require('../../generators/generator-constants');

const { ANGULAR, VUE, REACT } = constants.SUPPORTED_CLIENT_FRAMEWORKS;
const CLIENT_WEBPACK_DIR = constants.CLIENT_WEBPACK_DIR;
const assetFrom = 'source';
const assetTo = 'target';

const mockBlueprintSubGen = class extends ClientGenerator {
  constructor(args, opts, features) {
    super(args, opts, features);

    const jhContext = (this.jhipsterContext = this.options.jhipsterContext);

    if (!jhContext) {
      this.error('This is a JHipster blueprint and should be used only like jhipster --blueprints myblueprint');
    }

    this.sbsBlueprint = true;
  }

  get postWriting() {
    const customPhaseSteps = {
      webpackPhase() {
        this.copyExternalAssetsInWebpack(assetFrom, assetTo);
        this.addWebpackConfig('{devServer:{}}');
      },
    };
    return { ...customPhaseSteps };
  }
};

describe('needle API Webpack: JHipster client generator with blueprint', () => {
  function generateAppWithClientFramework(clientFramework) {
    return helpers
      .create(path.join(__dirname, '../../generators/client'))
      .withOptions({
        fromCli: true,
        build: 'maven',
        auth: 'jwt',
        db: 'mysql',
        skipInstall: true,
        blueprint: 'myblueprint',
        skipChecks: true,
        baseName: 'jhipster',
        clientFramework,
        enableTranslation: true,
        nativeLanguage: 'en',
        languages: ['en', 'fr'],
      })
      .withGenerators([[mockBlueprintSubGen, 'jhipster-myblueprint:client']])
      .run();
  }

  describe('Angular clientFramework', () => {
    before(() => {
      return generateAppWithClientFramework(ANGULAR);
    });

    it('Assert external asset is added to webpack.custom.js', async () => {
      assert.fileContent(`${CLIENT_WEBPACK_DIR}webpack.custom.js`, `{ from: '${assetFrom}', to: '${assetTo}' },`);
    });

    it('should add webpack config to webpack.custom.js', async () => {
      assert.fileContent(`${CLIENT_WEBPACK_DIR}webpack.custom.js`, '{ devServer: {} }');
    });
  });

  describe('React clientFramework', () => {
    before(() => {
      return generateAppWithClientFramework(REACT);
    });

    it('Assert external asset is added to webpack.common.js', async () => {
      assert.fileContent(`${CLIENT_WEBPACK_DIR}webpack.common.js`, `{ from: '${assetFrom}', to: '${assetTo}' },`);
    });
    it('should add webpack config to webpack.common.js', async () => {
      assert.fileContent(`${CLIENT_WEBPACK_DIR}webpack.common.js`, '{ devServer: {} }');
    });
  });

  describe('Vue clientFramework', () => {
    before(() => {
      return generateAppWithClientFramework(VUE);
    });

    it('Assert external asset is added to webpack.common.js', async () => {
      assert.fileContent(`${CLIENT_WEBPACK_DIR}webpack.common.js`, `{ from: '${assetFrom}', to: '${assetTo}' },`);
    });
    it('should add webpack config to webpack.common.js', async () => {
      assert.fileContent(`${CLIENT_WEBPACK_DIR}webpack.common.js`, '{ devServer: {} }');
    });
  });
});
