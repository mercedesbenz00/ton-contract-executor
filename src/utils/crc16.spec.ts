import {crc16} from "./crc16";

describe('crc16', () => {
    it('should hash', async () => {
        expect(crc16('get_seq')).toEqual(38947)
    })
})