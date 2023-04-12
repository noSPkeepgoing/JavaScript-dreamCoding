// Bubbling up, Propagating
function a() {
  throw new Error('Error');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('여기서도 만약에 에러 처리 못하면');
    throw error;
  }
}

function c() {
  b();
}
try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done');
