describe('Az app.js tesztjei',()=>{

    it('Bemenet 30, 35 akkor 525', () => {
        let actual = calcTriangleArea(30,35)
        expect(525).toBe(actual);
    });
    it('Bemenet 100, 130 akkor 6500', () => {
        let actual = calcTriangleArea(100,130)
        expect(6500).toBe(actual);
    });
    it('Bemenet 1, 3 akkor 1.5', () => {
        let actual = calcTriangleArea(1,3)
        expect(1.5).toBe(actual);
    });

});
describe('A bevitel elleőrzésének tesztelése', ()=>{
    it('Az "a" bemenetre null-t várunk',()=>{
        let actual = checkInput('a')
        expect(actual).toBeNull()
    });
    it('Az bemenetre null-t várunk',()=>{
        let actual = checkInput('333')
        expect(actual).not.toBeNull();
        
    });
});
