var ordering = true

//what would you like to order? <- to be replaced with watson input
var order = "I would like to order a taco"
//would you like chick or beef?
var specification = "I want chicken"
//add another item or complete order?
var complete = "add another"

//pass in as context
var specificationTaco = ['beef', 'chicken']
var orderableItems = ['burrito', 'taco', 'quesadilla', 'nachos']
var completion = ['complete', 'another']

//Please order one item at a time
function parseVoiceString( passed_in_string, context ) {
  var orderItems = []
  var orderArray = passed_in_string.split(' ')
  orderArray.forEach(function(elem) {
    //come back and make this iterable
    context.forEach(function(e) {
      if (elem === e) {
        orderItems.push(elem)
      }
    })
  })
  return orderItems
}

console.log(parseVoiceString(order, orderableItems));
console.log(parseVoiceString(specification, specificationTaco));
console.log(parseVoiceString(complete, completion));

while (ordering) {
  parseVoiceString(order, orderableItems)

  if (parseVoiceString(complete, completion) === ) {

  }
}
