//Please order one item at a time
function parseVoiceString(passed_in_string, context) {
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

function beginDialog() {
  var ordering = true;
  var specificationTaco = ['beef', 'chicken']
  var orderableItems = ['burrito', 'taco', 'quesadilla', 'nachos']
  var completion = ['complete', 'another']
    //append to div: what would you like to order? <- to be replaced with watson input

  while (ordering) {
    //order on click -->
    //run google speach
    //return initial_string
    //what would you like to order?
    var order = "I would like to order a taco"
    parseVoiceString(order, orderableItems)
      //would you like chick or beef?
    var specification = "I want chicken"
    parseVoiceString(specification, specificationTaco)
      //add another item or complete order?
    var complete = "add another"

    if (parseVoiceString(complete, completion)[0] = 'complete') {
      ordering = false;
    }
  }
}
beginDialog()
