recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {

    let arrFiles = [];
    function getFiles(dir, founded = false) {
      //Common save (optional) and recursion of searching a match with dirName
      const saveAndRecursion = (dir, founded, save = true) => {
        if(save) dir.files.map(d => arrFiles.push(d))
        dir.subDirs.forEach(subD => getFiles(subD, founded))
      }
      if (founded || dir.dirName === dirName) {
        saveAndRecursion(dir, true);
      }
      if (!dirName) {
        saveAndRecursion(dir, false);
      } else if (dir.dirName !== dirName) {
        saveAndRecursion(dir, false, false)
      }
      return arrFiles;
    }
    const files = getFiles(data);
    
    return files;


  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    var fibo = function (n) {
      if (n <= 2) {
        return 1;
      } else {
        return fibo(n - 1) + fibo(n - 2);
      }
    }
    return fibo(n);
  },
};
