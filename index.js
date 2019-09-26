var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name1) {
  kittens.push(name1)
}

function destructivelyPrependKitten(name2) {
  kittens.unshift(name2)
}

function destructivelyRemoveLastKitten(name3) {
  kittens.pop(name3)
}

function destructivelyRemoveFirstKitten(name4) {
  kittens.shift(name4)
}

function appendKitten(name5) {
  kittens2 = kittens.concat(name5)
  return kittens2
}

function prependKitten(name6) {
  kittens.slice(name6)
  
}