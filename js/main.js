$(document).ready(function() {
  $(".Zero").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 0)
  })

  $(".One").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 1)
  })

  $(".Two").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 2)
  })

  $(".Three").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 3)
  })

  $(".Four").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 4)
  })

  $(".Five").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 5)
  })

  $(".Six").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 6)
  })

  $(".Seven").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 7)
  })

  $(".Eight").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 8)
  })

  $(".Nine").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + 9)
  })

  $(".Coma").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + ".")
  })

  $(".Plus").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + "+")
  })

  $(".Minus").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + "-")
  })
  
  $(".Multiply").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + "*")
  })

  $(".Devide").click(function() {
    $('.Calc-display').val($('.Calc-display').val() + "/")
  })

  $(".Equal").click(function() {
    $('.Calc-display').val(eval($('.Calc-display').val()))
  })

  $(".Clear-all").click(function() {
    $('.Calc-display').val('')
  })

  $(".Delete").click(function() {
    value = $('.Calc-display').val()
    $('.Calc-display').val(value.substring(0, value.length - 1))
  })
})