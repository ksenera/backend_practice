import PhotoApi, {MockPhotoApiDataConnector, PhotoApiDataConnector} from "./photoApi";
import { postgresDataSource } from "../configure";

describe('Photo Api', () => {
  test('will throw an error if id is less than 0', () => {
    const photoApi = new PhotoApi(new MockPhotoApiDataConnector());

    expect(photoApi.get('1')).toBe('Photo ID cannot be less than 0')
  });

  test('a photo is returned if a positive id is provided', async () => {
const photoApi = new PhotoApi(new PhotoApiDataConnector(postgresDataSource));

    expect(await photoApi.get('1')).toStrictEqual(
      [{
        id: 1, 
        name: 'a mocked photo entity',
        description: 'a description of the mocked photo entity',
        filename: 'mocked-photo-entity.png',
        views: 3,
        isPublished: true,
      }]);
  });
});
