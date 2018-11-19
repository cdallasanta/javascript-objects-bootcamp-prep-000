var meals = {
  breakfast:'cereal',
  lunch:'leftovers',
  dinner:'pot pie'
};

function nondestructivelyAddItem(obj, key,value){
  return Object.assign(obj, {[key]:value});
}