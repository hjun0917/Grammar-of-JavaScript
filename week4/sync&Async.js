// 비동기적인 것을 왜 동기적으로 만드려하는가?
// 순서가 보장되지 않기 때문에, 순서가 보장되어야하는 로직에서 순서를 보장받기 위해!!!

// Generator, async/await -> 2가지 방법

// test code
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      })
  }
  
  function narutoIsNotOtaku() {
    let title = prompt("애니메이션 제목을 입력하세요.", "naruto");
  
      return loadJson(`https://animechan.vercel.app/api/random/anime?title=${title}`)
      .then(res => {
              alert(`${res.character}: ${res.quote}.`);
        return res;
      })
      .catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!");
          return narutoIsNotOtaku();
        } else {
          throw err;
        }
      });
  }
  
  narutoIsNotOtaku();