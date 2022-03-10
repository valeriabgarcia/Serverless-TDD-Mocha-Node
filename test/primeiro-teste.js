const assert = require('assert');

describe('Alguns testes de exemplo', function(){

    it('2 + 2 deve ser igual a 4', function(){
        assert.equal(4, 2 + 2);
    });

    it('2 * 2 deve ser igual a 8 (é falso)', function(){
        assert.equal(8, 2 * 2);
    });

});