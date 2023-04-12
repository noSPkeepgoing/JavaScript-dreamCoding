// try catch finally
function readFile(path) {
  throw new Error('파일 경롤르 찾을 수 없음');
  return '파일내용!';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error);
    content = '기본내용';
  } finally {
    console.log('성공하든 실패하든 마지막으로 리소스 정리 가능');
  }
  const result = 'hey' + content;
  return result;
}

const result = processFile('path');
console.log(result);
