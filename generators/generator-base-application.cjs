/**
 * Copyright 2013-2021 the original author or authors from the JHipster project.
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
const BaseBlueprintGenerator = require('./generator-base-blueprint');
const { CUSTOM_PRIORITIES_ENTITIES, PRIORITY_NAMES, QUEUES } = require('../lib/constants/priorities.cjs');

const {
  LOADING,
  PREPARING,

  CONFIGURING_EACH_ENTITY,
  LOADING_EACH_ENTITY,
  PREPARING_EACH_ENTITY,
  PREPARING_FIELDS,
  PREPARING_EACH_ENTITY_FIELD,
  PREPARING_RELATIONSHIPS,
  PREPARING_EACH_ENTITY_RELATIONSHIP,
  POST_PREPARING_EACH_ENTITY,
  DEFAULT,
  WRITING,
  POST_WRITING,
  WRITING_ENTITIES,
  POST_WRITING_ENTITIES,
  PRE_CONFLICTS,
  INSTALL,
  END,
} = PRIORITY_NAMES;

const {
  CONFIGURING_EACH_ENTITY_QUEUE,
  LOADING_EACH_ENTITY_QUEUE,
  PREPARING_EACH_ENTITY_QUEUE,
  PREPARING_EACH_ENTITY_FIELD_QUEUE,
  PREPARING_EACH_ENTITY_RELATIONSHIP_QUEUE,
  POST_PREPARING_EACH_ENTITY_QUEUE,
  WRITING_ENTITIES_QUEUE,
  POST_WRITING_ENTITIES_QUEUE,
} = QUEUES;

/**
 * This is the base class for a generator that generates entities.
 *
 * @class
 * @template ApplicationType
 * @extends {BaseBlueprintGenerator<ApplicationType>}
 */
class JHipsterBaseEntitiesGenerator extends BaseBlueprintGenerator {
  constructor(args, options, features) {
    super(args, options, { priorityArgs: true, ...features });

    if (this.options.help) {
      return;
    }

    this.registerPriorities(CUSTOM_PRIORITIES_ENTITIES);

    /* Add tasks allowing entities priorities to match normal priorities pattern */
    this.on('queueOwnTasks', () => {
      this.debug('Queueing entity tasks');
      this.queueEntityTasks();
    });
  }

  /**
   * Priority API stub for blueprints.
   */
  get preparingEachEntity() {
    return this.asPreparingEachEntityTaskGroup({});
  }

  /**
   * Priority API stub for blueprints.
   *
   * Configuring each entity should configure entities.
   */
  get configuringEachEntity() {
    return this.asConfiguringEachEntityTaskGroup({});
  }

  /**
   * Priority API stub for blueprints.
   */
  get preparingEachEntityField() {
    return this.asPreparingEachEntityFieldTaskGroup({});
  }

  /**
   * Priority API stub for blueprints.
   */
  get preparingEachEntityRelationship() {
    return this.asPreparingEachEntityRelationshipTaskGroup({});
  }

  /**
   * Priority API stub for blueprints.
   */
  get writingEntities() {
    return this.asWritingEntitiesTaskGroup({});
  }

  /**
   * Priority API stub for blueprints.
   */
  get postWritingEntities() {
    return this.asPostWritingEntitiesTaskGroup({});
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').InitializingTaskGroup<this>} taskGroup
   * @returns {import('../types/tasks').InitializingTaskGroup<this>}
   */
  asInitialingTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').ConfiguringTaskGroup<this>} taskGroup
   * @returns {import('../types/tasks').ConfiguringTaskGroup<this>}
   */
  asConfiguringTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').PromptingTaskGroup<this>} taskGroup
   * @returns {import('../types/tasks').PromptingTaskGroup<this>}
   */
  asPromptingTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').ComposingTaskGroup<this>} taskGroup
   * @returns {import('../types/tasks').ComposingTaskGroup<this>}
   */
  asComposingTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').LoadingTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').LoadingTaskGroup<this, ApplicationType>}
   */
  asLoadingTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').PreparingTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').PreparingTaskGroup<this, ApplicationType>}
   */
  asPreparingTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').ConfiguringEachEntityTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').ConfiguringEachEntityTaskGroup<this, ApplicationType>}
   */
  asConfiguringEachEntityTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').LoadingEachEntityTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').LoadingEachEntityTaskGroup<this, ApplicationType>}
   */
  asLoadingEachEntityTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').PreparingEachEntityTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').PreparingEachEntityTaskGroup<this, ApplicationType>}
   */
  asPreparingEachEntityTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').PreparingEachEntityFieldTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').PreparingEachEntityFieldTaskGroup<this, ApplicationType>}
   */
  asPreparingEachEntityFieldTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').PreparingEachEntityRelationshipTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').PreparingEachEntityRelationshipTaskGroup<this, ApplicationType>}
   */
  asPreparingEachEntityRelationshipTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').PostPreparingEachEntityTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').PostPreparingEachEntityTaskGroup<this, ApplicationType>}
   */
  asPostPreparingEachEntityTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').DefaultTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').DefaultTaskGroup<this, ApplicationType>}
   */
  asDefaultTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').WritingTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').WritingTaskGroup<this, ApplicationType>}
   */
  asWritingTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').WritingEntitiesTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').WritingEntitiesTaskGroup<this, ApplicationType>}
   */
  asWritingEntitiesTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').PostWritingTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').PostWritingTaskGroup<this, ApplicationType>}
   */
  asPostWritingTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').PostWritingEntitiesTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').PostWritingEntitiesTaskGroup<this, ApplicationType>}
   */
  asPostWritingEntitiesTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').InstallTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').InstallTaskGroup<this, ApplicationType>}
   */
  asInstallTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').PostInstallTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').PostInstallTaskGroup<this, ApplicationType>}
   */
  asPostInstallTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * Utility method to get typed objects for autocomplete.
   *
   * @param {import('../types/tasks').EndTaskGroup<this, ApplicationType>} taskGroup
   * @returns {import('../types/tasks').EndTaskGroup<this, ApplicationType>}
   */
  asEndTaskGroup(taskGroup) {
    return taskGroup;
  }

  /**
   * @protected
   */
  getArgsForPriority(priorityName) {
    return [this.getTaskFirstArgForPriority(priorityName)];
  }

  /**
   * @protected
   */
  getTaskFirstArgForPriority(priorityName) {
    if (
      ![
        LOADING,
        PREPARING,

        CONFIGURING_EACH_ENTITY,
        LOADING_EACH_ENTITY,
        PREPARING_EACH_ENTITY,
        PREPARING_FIELDS,
        PREPARING_EACH_ENTITY_FIELD,
        PREPARING_RELATIONSHIPS,
        PREPARING_EACH_ENTITY_RELATIONSHIP,
        POST_PREPARING_EACH_ENTITY,

        DEFAULT,
        WRITING,
        WRITING_ENTITIES,
        POST_WRITING,
        POST_WRITING_ENTITIES,
        PRE_CONFLICTS,
        INSTALL,
        END,
      ].includes(priorityName)
    ) {
      throw new Error(`${priorityName} data not available`);
    }
    if (!this.jhipsterConfig.baseName) {
      throw new Error(`${this.jhipsterConfig.baseName} application not available`);
    }
    if ([WRITING_ENTITIES, POST_WRITING_ENTITIES, DEFAULT].includes(priorityName)) {
      return {
        application: this.sharedData.getApplication(),
        ...this.getEntitiesDataToWrite(),
      };
    }

    return { application: this.sharedData.getApplication() };
  }

  /**
   * @private
   * Get entities to configure.
   * This method doesn't filter entities. An filtered config can be changed at thie priority.
   * @returns {string[]}
   */
  getEntitiesDataToConfigure() {
    return this.getExistingEntityNames().map(entityName => {
      const entityStorage = this.getEntityConfig(entityName, true);
      return { entityName, entityStorage, entityConfig: entityStorage.createProxy() };
    });
  }

  /**
   * @private
   * Get entities to load.
   * This method doesn't filter entities. An filtered config can be changed at thie priority.
   * @returns {string[]}
   */
  getEntitiesDataToLoad() {
    return this.getExistingEntityNames().map(entityName => ({ entityName, entityStorage: this.getEntityConfig(entityName, true) }));
  }

  /**
   * @private
   * Get entities to prepare.
   * @returns {object[]}
   */
  getEntitiesDataToPrepare() {
    return this.sharedData.getEntities().map(({ entityName, ...data }) => ({
      description: entityName,
      entityName,
      ...data,
    }));
  }

  /**
   * @private
   * Get entities and fields to prepare.
   * @returns {object[]}
   */
  getEntitiesFieldsDataToPrepare() {
    return this.getEntitiesDataToPrepare()
      .map(({ entity, entityName, ...data }) => {
        if (!entity.fields) return [];

        return entity.fields.map(field => ({
          entity,
          entityName,
          ...data,
          field,
          fieldName: field.fieldName,
          description: `${entityName}#${field.fieldName}`,
        }));
      })
      .flat();
  }

  /**
   * @private
   * Get entities and relationships to prepare.
   * @returns {object[]}
   */
  getEntitiesRelationshipsDataToPrepare() {
    return this.getEntitiesDataToPrepare()
      .map(({ entity, entityName, ...data }) => {
        if (!entity.relationships) return [];

        return entity.relationships.map(relationship => ({
          entity,
          entityName,
          ...data,
          relationship,
          relationshipName: relationship.relationshipName,
          description: `${entityName}#${relationship.relationshipName}`,
        }));
      })
      .flat();
  }

  /**
   * @private
   * Get entities to post prepare.
   * @returns {object[]}
   */
  getEntitiesDataToPostPrepare() {
    return this.getEntitiesDataToPrepare();
  }

  /**
   * @private
   * Get entities to write.
   * @returns {object[]}
   */
  getEntitiesDataToWrite() {
    const { entities = [] } = this.options;
    let entitiesDefinitions = this.sharedData.getEntities();
    if (entities.length > 0) {
      entitiesDefinitions = entitiesDefinitions.filter(({ entityName }) => entities.includes(entityName));
    }
    return { entities: entitiesDefinitions.map(({ entity }) => entity) };
  }

  /**
   * @private
   * Queue entity tasks.
   */
  queueEntityTasks() {
    this.queueTask({
      queueName: CONFIGURING_EACH_ENTITY_QUEUE,
      taskName: 'queueConfiguringEachEntity',
      cancellable: true,
      method: () => {
        this.debug(`Queueing entity tasks ${CONFIGURING_EACH_ENTITY}`);
        const tasks = this.extractTasksFromPriority(CONFIGURING_EACH_ENTITY, { skip: false });
        this.getEntitiesDataToConfigure().forEach(({ entityName, entityStorage, entityConfig }) => {
          this.debug(`Queueing entity tasks ${CONFIGURING_EACH_ENTITY} for ${entityName}`);
          tasks.forEach(task => {
            this.queueTask({
              ...task,
              args: [{ ...this.getTaskFirstArgForPriority(CONFIGURING_EACH_ENTITY), entityName, entityStorage, entityConfig }],
            });
          });
        });
      },
    });

    this.queueTask({
      queueName: LOADING_EACH_ENTITY_QUEUE,
      taskName: 'queueLoadingEachEntity',
      cancellable: true,
      method: () => {
        this.debug(`Queueing entity tasks ${LOADING_EACH_ENTITY}`);
        const tasks = this.extractTasksFromPriority(LOADING_EACH_ENTITY, { skip: false });
        this.getEntitiesDataToLoad().forEach(({ entityName, entityStorage }) => {
          this.debug(`Queueing entity tasks ${LOADING_EACH_ENTITY} for ${entityName}`);
          tasks.forEach(task => {
            this.queueTask({
              ...task,
              args: [{ ...this.getTaskFirstArgForPriority(LOADING_EACH_ENTITY), entityName, entityStorage }],
            });
          });
        });
      },
    });

    this.queueTask({
      queueName: PREPARING_EACH_ENTITY_QUEUE,
      taskName: 'queuePreparingEachEntity',
      cancellable: true,
      method: () => {
        this.debug(`Queueing entity tasks ${PREPARING_EACH_ENTITY}`);
        const tasks = this.extractTasksFromPriority(PREPARING_EACH_ENTITY, { skip: false });
        this.getEntitiesDataToPrepare().forEach(({ description, ...data }) => {
          this.debug(`Queueing entity tasks ${PREPARING_EACH_ENTITY} for ${description}`);
          tasks.forEach(task => {
            this.queueTask({
              ...task,
              args: [{ ...this.getTaskFirstArgForPriority(PREPARING_EACH_ENTITY), description, ...data }],
            });
          });
        });
      },
    });

    this.queueTask({
      queueName: PREPARING_EACH_ENTITY_FIELD_QUEUE,
      taskName: 'queuePreparingEachEntityField',
      cancellable: true,
      method: () => {
        const tasks = this.extractTasksFromPriority(PREPARING_EACH_ENTITY_FIELD, { skip: false });
        this.getEntitiesFieldsDataToPrepare().forEach(({ description, ...data }) => {
          this.debug(`Queueing entity tasks ${PREPARING_EACH_ENTITY_FIELD} for ${description}`);
          tasks.forEach(task => {
            this.queueTask({
              ...task,
              args: [{ ...this.getTaskFirstArgForPriority(PREPARING_EACH_ENTITY_FIELD), description, ...data }],
            });
          });
        });
      },
    });

    this.queueTask({
      queueName: PREPARING_EACH_ENTITY_RELATIONSHIP_QUEUE,
      taskName: 'queuePreparingEachEntityRelationship',
      cancellable: true,
      method: () => {
        const tasks = this.extractTasksFromPriority(PREPARING_EACH_ENTITY_RELATIONSHIP, { skip: false });
        this.getEntitiesRelationshipsDataToPrepare().forEach(({ description, ...data }) => {
          this.debug(`Queueing entity tasks ${PREPARING_EACH_ENTITY_RELATIONSHIP} for ${description}`);
          tasks.forEach(task => {
            this.queueTask({
              ...task,
              args: [{ ...this.getTaskFirstArgForPriority(PREPARING_EACH_ENTITY_RELATIONSHIP), description, ...data }],
            });
          });
        });
      },
    });

    this.queueTask({
      queueName: POST_PREPARING_EACH_ENTITY_QUEUE,
      taskName: 'queuePostPreparingEachEntity',
      cancellable: true,
      method: () => {
        const tasks = this.extractTasksFromPriority(POST_PREPARING_EACH_ENTITY, { skip: false });
        this.getEntitiesDataToPostPrepare().forEach(({ description, ...data }) => {
          this.debug(`Queueing entity tasks ${POST_PREPARING_EACH_ENTITY} for ${description}`);
          tasks.forEach(task => {
            this.queueTask({
              ...task,
              args: [{ ...this.getTaskFirstArgForPriority(POST_PREPARING_EACH_ENTITY), description, ...data }],
            });
          });
        });
      },
    });

    this.queueTask({
      queueName: WRITING_ENTITIES_QUEUE,
      taskName: 'queueWritingEachEntity',
      cancellable: true,
      method: () => {
        if (this.options.skipWriting) return;
        const tasks = this.extractTasksFromPriority(WRITING_ENTITIES, { skip: false });
        tasks.forEach(task => {
          this.queueTask({
            ...task,
            args: this.getArgsForPriority(WRITING_ENTITIES),
          });
        });
      },
    });

    this.queueTask({
      queueName: POST_WRITING_ENTITIES_QUEUE,
      taskName: 'queuePostWritingEachEntity',
      cancellable: true,
      method: () => {
        if (this.options.skipWriting) return;
        const tasks = this.extractTasksFromPriority(POST_WRITING_ENTITIES, { skip: false });
        tasks.forEach(task => {
          this.queueTask({
            ...task,
            args: this.getArgsForPriority(POST_WRITING_ENTITIES),
          });
        });
      },
    });
  }
}

module.exports = JHipsterBaseEntitiesGenerator;
