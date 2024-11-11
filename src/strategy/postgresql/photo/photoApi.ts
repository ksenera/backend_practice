import { DataSource } from "typeorm";
import { Photo } from "./photo";

export default class PhotoApi {
  #dataConnector: DataConnector<Photo, FilteringOptions>

  constructor(dataConnector: DataConnector<Photo, FilteringOptions>) {
    this.#dataConnector = dataConnector
  }
  // id needs to be string because you are getting it from 
  // the api endpoint
  get(id: string) {

    const photoId = parseInt(id)

    if (photoId < 0) {
      return 'Photo ID cannot be less than 0';
    }

    if (typeof id !== 'number') {
      return 'id must be number'
    }

    // this is the problem.
   // return this.#dataSource.manager.findBy(Photo, {
   //   id: photoId,
   // });
    return this.#dataConnector.findBy({ photoId });
  }
}


interface DataConnector<T, R> {
  findBy: (filteringOptions: R) => Promise<T[]>;
}

export class PhotoApiDataConnector implements DataConnector<Photo, FilteringOptions> {
  #dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.#dataSource = dataSource;
  }


  findBy(filteringOptions: FilteringOptions): Promise<Photo[]> {
    return this.#dataSource.manager.findBy(Photo, {
      id: filteringOptions.photoId,
    });
  };
}

export class MockPhotoApiDataConnector implements DataConnector<Photo, FilteringOptions> {
  async findBy(filteringOptions: FilteringOptions): Promise<Photo[]> {
    return [{
      id: 1, 
      name: 'a mocked photo entity',
      description: 'a description of the mocked photo entity',
      filename: 'mocked-photo-entity.png',
      views: 3,
      isPublished: true,
    }]
  }
}

interface FilteringOptions {
  photoId: number;
}

