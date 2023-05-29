/**
 * data
 */

function getData(type) {
  return new Promise((resolve, reject) => {
    if(type) {
      resolve(1)
    }else {
      reject(0);
    }
  });
}

export async function init() {
  let data = await getData(true)
  console.log(1111111, data);
}

export async function init1() {
  let data = await getData(false).catch(err => {
    console.log(err);
  });
  console.log(1111111, data);
}

export async function init2() {
  try {
    let data = await getData(true);
    console.log(2222222, data)
  }catch(err) {
    console.log(err);
  }
}