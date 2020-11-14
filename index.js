// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];
//1
function destructivelyAppendDriver(name){
    drivers.push(name)
};
//2
function destructivelyPrependDriver(name){
    drivers.unshift(name)
};
//3
function destructivelyRemoveLastDriver(){
    drivers.pop()
};
//4
function destructivelyRemoveFirstDriver(){
    drivers.shift()
};
//5 
function appendDriver(name){
    return [...drivers, name]
};
//6
function prependDriver(name){
    return [name, ...drivers]
};
//7
function removeLastDriver(){
    return drivers.slice(0, drivers.length - 1)
};
//8
function removeFirstDriver(){
    return drivers.slice(1)
}; 