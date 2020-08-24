
import {getGifs} from '../../helpers/getGifs';

describe('Tesing on getGift', () => {
    
    test('Should give 10 elements.', async() => {
        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBe(10);
    })
    
})
