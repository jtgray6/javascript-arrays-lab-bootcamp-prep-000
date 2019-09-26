var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name1) {
  kittens.push(name1)
}
var kittens = ["Milo","Otis","Garfield"]
function destructivelyPrependKitten(name2) {
  kittens.unshift(name2)
}
var kittens = ["Milo","Otis","Garfield"]
function destructivelyRemoveLastKitten(name3) {
  kittens.pop(name3)
}
var kittens = ["Milo","Otis","Garfield"]
function destructivelyRemoveFirstKitten(name4) {
  kittens.shift(name4)
}
var kittens = ["Milo","Otis","Garfield"]
function appendKitten(name5) {
  kittens2 = kittens.concat(name5)
  return kittens2
}
var kittens = ["Milo","Otis","Garfield"]
function prependKitten(name6) {
  kittens.slice(name6)
  
}