function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('error!'));
  //   return Promise.resolve(`🐥 => 🐓`);
}

async function makeFridEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFridEgg() //
  .then(console.log);
