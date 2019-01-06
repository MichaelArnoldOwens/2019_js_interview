var assert = require('assert');





describe('rotateImage', function() {
  describe('should rotate matrix', function() {
    it('should rotate the image 90', function() {
      function rotateImage(a) {
        a.reverse()
      
        for (var i = 0; i < a.length; i++) {
          for (var j = 0; j < i; j++) {
            var temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
          }
        }
        return a;
      }
      
      let m = [
          [1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]
      ]
      
      
      m = rotateImage(m)
      let result = 
      [[7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]]
      
      
      assert.equal(JSON.stringify(m), JSON.stringify(result));
    });
  });
});


