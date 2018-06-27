ec.createComponent('page1', {
  templateUrl: 'template/page1.html'
})
ec.createComponent('page2', {
  templateUrl: 'template/page2.html'
})
ec.createComponent('page3', {
  templateUrl: 'template/page3.html'
})
ec.createComponent('page4', {
  templateUrl: 'template/page4.html'
})
ec.createComponent('page5', {
  templateUrl: 'template/page5.html'
})
ec.createComponent('page6', {
  templateUrl: 'template/page6.html'
})
ec.createComponent('page7', {
  templateUrl: 'template/page7.html'
})
ec.createComponent('page8', {
  templateUrl: 'template/page8.html'
})
ec.createComponent('page9', {
  templateUrl: 'template/page9.html'
})
ec.componentIn(function() {
  ec.jsLoad('lib/impress.js', function(o) {
    // ec.jsLoad('lib/test.js', function(o) {

    // })
  })
})