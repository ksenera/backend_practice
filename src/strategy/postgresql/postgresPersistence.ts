import {DataSource, EntityTarget} from "typeorm";
import PersistenceService from "../../persistenceService";

export default class PostgresPersistence implements PersistenceService {
  #dataSource: DataSource;

  constructor(datasource: DataSource) {
    this.#dataSource = datasource;
  }

  async create<T>(id: string) {
    return await this.#dataSource.manager.findBy(T, {
          id: parseInt(id),
        })
  };
  async insert<T = unknown>(content: EntityTarget<T>, id: unknown) {
    return await this.#dataSource.manager.findBy(content, id),
  };
}

export class MockPersistenceService implements PersistenceService {
  create(name: string) {
    return {
      id: 123,
      name: 'name',
      description: 'descript',
      filename: 'filename',
      view: 0
    }
  };
  insert: <T = unknown>(content: T, location: string) => void;
}

