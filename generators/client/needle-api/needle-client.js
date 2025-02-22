/**
 * Copyright 2013-2022 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const needleBase = require('../../needle-base');

module.exports = class extends needleBase {
  constructor(generator) {
    super(generator);

    this.CLIENT_MAIN_SRC_DIR = generator.CLIENT_MAIN_SRC_DIR;
    this.clientFramework = generator.clientFramework || generator.jhipsterConfig.clientFramework;

    if (!this.CLIENT_MAIN_SRC_DIR) {
      generator.error('Client destination folder is missing');
    }
  }

  addStyle(style, comment, filePath, needle) {
    const styleBlock = this._mergeStyleAndComment(style, comment);
    const rewriteFileModel = this.generateFileModel(filePath, needle, styleBlock);
    rewriteFileModel.regexp = `\n${style}\n`;
    rewriteFileModel.prettierAware = true;

    this.addBlockContentToFile(rewriteFileModel, 'Style not added to JHipster app.\n');
  }

  _mergeStyleAndComment(style, comment) {
    let styleBlock = '';

    if (comment) {
      styleBlock += '/* ==========================================================================\n';
      styleBlock += `${comment}\n`;
      styleBlock += '========================================================================== */\n';
    }
    styleBlock += `${style}\n`;

    return styleBlock;
  }

  addExternalResourcesToRoot(resources, comment) {
    const errorMessage = 'Resources are not added to JHipster app.';
    const indexFilePath = `${this.CLIENT_MAIN_SRC_DIR}index.html`;
    let resourcesBlock = '';
    if (comment) {
      resourcesBlock += `<!-- ${comment} -->\n`;
    }
    resourcesBlock += `${resources}\n`;
    const rewriteFileModel = this.generateFileModel(indexFilePath, 'jhipster-needle-add-resources-to-root', resourcesBlock);

    this.addBlockContentToFile(rewriteFileModel, errorMessage);
  }
};
