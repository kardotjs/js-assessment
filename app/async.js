asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    return new Promise((resolve) => {
      setTimeout(resolve(value), 10)
    })
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    return new Promise((resolve, reject) => {
      let temp = [];
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.addEventListener("load", reqListener);
      xhr.send();

      function reqListener() {
        let result = [];
        data = JSON.parse(this.response);
        for (var i = 0; i < data.people.length; i++) {
          temp.push(data.people[i].name);
        }
        result = temp.sort();
        resolve(result)
      }
    })
  },
};
