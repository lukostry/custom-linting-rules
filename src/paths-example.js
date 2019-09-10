function withoutCycles () {
  console.log('hi');
}

function withCycle() {
  if (true) {
    console.log('some segment')
  } else {
    console.log('other segment');
  }
}

function withoutCycle () {
  const arr = [1, 2]
  for (const item of arr) {
    console.log(item)
  }
}